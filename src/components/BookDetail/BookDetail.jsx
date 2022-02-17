import React from "react";
import { useDispatch } from "react-redux";
import "./BookDetail.css";
import { exitDetail } from "../../actions";
import normalUTF8 from "./detailFunctions.js";

function BookDetail({ book }) {
  const dispatch = useDispatch();
  const content = normalUTF8(book.content);

  function volver() {
    dispatch(exitDetail());
  }

  return (
    <div className="all">
      <img className="imageDetail" src={book.cover} alt="" />
      <div className="rightSide">
        <div className="data">
          <div className="titleBook">
            <h2>{book.title}</h2>
          </div>
          <div className="autorBook">
            <h3>Autor/a: {book.author}</h3>
          </div>
          <div className="details">
            <h3>Detalles</h3>
          </div>
          <div>
            <span className="infoTitle"> Año:</span>{" "}
            <span>{book.publisher_date}</span>
          </div>
          <div>
            <span className="infoTitle">Editor:</span>{" "}
            <span>{book.publisher}</span>
          </div>
          <div>
            <span className="infoTitle">Páginas:</span>{" "}
            <span>{book.pages} págs.</span>
          </div>
          <div className="details">
            <h3>Contenido</h3>
          </div>
          <div className="contentBook">{content}</div>
          <div className="details">
            <h3>Categorías</h3>
          </div>
          <div className="categContainer">
            {book.categories.map((c) => (
              <div key={c.category_id} className="categ">
                {c.name}
              </div>
            ))}
          </div>
          <div className="link">
            <a className="link" href={book.url_download} target="_blank" rel="noopener noreferrer">
              Enlace a Open Libra para abrir/descargar PDF</a>
          </div>
          <button className="volver" onClick={volver}>VOLVER</button>
        </div>
      </div>
    </div>
  );
}

export default BookDetail;
