import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchBook, query, getBooks } from "../../actions";
import "./Search.css";

function Search() {
  const dispatch = useDispatch();
  const [book, setBook] = useState("");

  function handleInputChange(e) {
    e.preventDefault();
    setBook(e.target.value);
  }

  //busqueda parcial por nombre del libro o autor
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(query(true));
    dispatch(searchBook(book));
    setBook("");
  }

  //"Todos" botón, resetea las paginas y trae todos los libros,
  function handleAll() {
    dispatch(query(true));
    dispatch(getBooks(0, 1, "all"));
  }

  return (
    <div className="containerSearch">
      <form className="formSearch" onSubmit={(e) => handleSubmit(e)}>
        <input
          className="inputSearch"
          type="text"
          placeholder="Titulo o Autor"
          value={book}
          onChange={(e) => handleInputChange(e)}
        />
        <input className="buttonSearch" type="submit" value="Buscar" />
      </form>
      <button className="buttonSearch" onClick={() => handleAll()}>
        Todos
      </button>
    </div>
  );
}

export default Search;
