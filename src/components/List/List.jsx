import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBooks, getByCategory, query} from "../../actions";
import Item from "../Item/Item";
import Spinner from "../Spinner/Spinner.js";
import BookDetail from "../BookDetail/BookDetail";
import "./List.css";

function List() {
  const [pageRange, setPageRange] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [subTitle, setSubTitle] = useState("");
  const [lang, setLang] = useState("all");
  const [prevButton, setPrevButton] = useState(false);
  const [nextButton, setNextButton] = useState(false);

  //constantes obtenidas del State de redux
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);    //libros del State de redux
  const loading = useSelector((state) => state.loading);// true o false (si se esta cargando el State)
  const search = useSelector((state) => state.search);  // true o false (si esta activa la busqueda)
  const busqueda = useSelector((state) => state.query); //string, la busqueda ingresada
  const pag = useSelector((state) => state.page);       //rango de libros en el State redux
  const nroPag = useSelector((state) => state.numberPage);//nro pag en el State de redux
  const cat = useSelector((state) => state.categ);      // true o false (si se seleccionó una categoría)
  const catId = useSelector((state) => state.idCateg);  //id de la categ seleccionada
  const catName = useSelector((state) => state.categName);//Nombre de la categoría seleccionada
  const book = useSelector((state) => state.bookDetail);  //libro cliqueado para mostrar componente BookDetail
  const language = useSelector((state) => state.language);// lenguaje seleccionado

 // se dispara al cambiar pag sgte o anterior, o al cambiar de lenguaje
  useEffect(() => {
    dispatch(query(true));
    if (!cat) {
      dispatch(getBooks(pageRange, pageNumber, lang));
    } else {
      dispatch(getByCategory(catId, catName, pageRange, pageNumber, lang));
    }
  }, [pageRange, lang]);


  //se dispara al cambiar el State de libros, es para mostrar el mje de que se esta mostrando (todos, busqueda o categoria)
  useEffect(() => {
    setPageNumber(nroPag);
    if (cat) setSubTitle("Categoría: " + catName);
    else if (search) setSubTitle("Busqueda: " + busqueda);
    else setSubTitle("Todos los Libros ");
    if (nroPag === 1) setPrevButton(true);
    else setPrevButton(false);
    if (books.length === 10) setNextButton(false);
    else setNextButton(true);
  }, [books]);

  //funcion al presionar pag sgte
  const nextPage = () => {
    setPageRange(pag + 10);
    setPageNumber(nroPag + 1);
  };

  //funcion al presionar pag anterior
  const prevPage = () => {
    if (pageRange >= 10) {
      setPageNumber(nroPag - 1);
      setPageRange(pag - 10);
    } else alert("no hay libros anteriores");
  }
 
  //funcion al presionar botones de lenguaje de libros
  function handleLanguage(e){
    setLang(e.target.value);
  }

  return (
    <div className="divContainer">
      {/*  renderiza: spiner, encabezado, items y botones paginación */ }
      {loading && <Spinner />}
      {JSON.stringify(book) !== "{}" ? ( 
        /* renderiza el libro seleccionado */
        <BookDetail book={book} />
       ):(
         /*  renderiza: encabezado, grid de libros y botones paginación */
        <div className="structure"> 
          {/* encabezado: leyenda de selección y botones lenguaje  */}
          <div className="head"> 
            <span>{subTitle}</span>
            <div className="languagecontainer">
              <button className={language==="english"? "languageButton activeLang" : "languageButton"} 
                value="english" onClick={handleLanguage}>Ingles</button>
              <button className={language==="spanish"? "languageButton activeLang" : "languageButton"} 
                value="spanish" onClick={(e)=>handleLanguage(e)}>Español</button>
              <button className={language==="all"? "languageButton activeLang" : "languageButton"} 
                value="all" onClick={(e)=>handleLanguage(e)}>Todos</button>
            </div>
          </div>
          {/* renderiza un grid con los libros(10) */}
          <div className="grid">
            {books.map((item) => (
              <Item
                book={item}
                key={item.ID}
              />
            ))}
          </div>
          {/* renderiza botones de paginación */}
          {!loading && !search && (
            <div className="buttonCont">
              <button
                name="prev"
                className="btnPrev"
                disabled={prevButton}
                onClick={prevPage}
                >
                Anterior
              </button>
              <p className="nroPag">Pag {pageNumber}</p>
              <button
                name="next"
                className="btnNext"
                disabled={nextButton}
                onClick={nextPage}
                >
                Siguiente
              </button>
            </div>
          )}
          </div>
      )}
    </div>
  );
}

export default List;