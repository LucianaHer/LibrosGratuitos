import React from "react";
import { useDispatch} from "react-redux";
import "./Item.css";
import { getBookDetail } from "../../actions";
import bookError from '../../img/libroError.jpg'


function Item({book}) {

  const dispatch = useDispatch();
  
  //funcion al hacer click en el libro o Item (llena el State de redux con ese libro)
  function handleBook(){
    dispatch(getBookDetail(book));
  }

  return (
    <div className="item" onClick={handleBook} >
      <div className="title">{book.title}</div>
      <div className="image">
        {<img src={book.cover}  loading="eager" width="100%" />}
        
      </div>
      <div className="autor">{book.author}</div>
    </div>
  );
}

export default Item;
