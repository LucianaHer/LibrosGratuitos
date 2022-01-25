import React, { useState } from "react";

function PanelAdd({ onCancel, onAdd }) {
  const [newBook, setnewBook] = useState({ title: "", image: "", rating: 1 });

  function onSubmit(e) {
    e.preventDefault();
    //alert("Formulario enviado?");
    onAdd(newBook);
    onCancel(e);

  }

  function handleInputChange(e) {
    //cdo se cambia algun campo ()
    e.preventDefault();
    if(e.target.value==="rating"){
        e.target.value=parseInt(e.target.value)
    }
    setnewBook({
      ...newBook,
      [e.target.name]: e.target.value,
    });
  }
  // function onChangeTitle(){
  //     setnewBook({title: e.target.value})
  // };

  return (
    <div className="new-item-panel-container">
      <div className="new-item-panel">
        <form onSubmit={onSubmit}>
          <p>
            <label>Título del libro</label>
            <br />
            <input
              value={newBook.title}
              type="text"
              name="title"
              className="input"
              onChange={(e) => handleInputChange(e)}
            />
          </p>

          <p>
            <label>Nombre de imagen</label>
            <br />
            <input
              value={newBook.image}
              type="text"
              name="image"
              className="input"
              placeholder="Ingrese URL de imágen.."
              onChange={(e) => handleInputChange(e)}
            />
          </p>

          <p>
            <label>Calificación</label>
            <br />
            <select name="rating" onChange={(e) => handleInputChange(e)}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </p>
          <input
            type="submit"
            className="button btn-blue"
            value="Registrar libro"
          />
          <button className="button btn-normal" onClick={onCancel}>
            Cancelar
          </button>
        </form>
      </div>
    </div>
  );
}

export default PanelAdd;
