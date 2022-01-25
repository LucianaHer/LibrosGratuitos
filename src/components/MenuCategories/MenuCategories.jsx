import React, { useEffect } from "react";
import "./MenuCategories.css";
import { useDispatch, useSelector } from "react-redux";
import { getCategories, getByCategory, query } from "../../actions";


function MenuCategories() {
  const dispatch = useDispatch();
  var categories = useSelector((state) => state.categories); //categorias en el State redux
  var language = useSelector((state) => state.language);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  function handleCat(catId, catName) {
    dispatch(query(true));
    dispatch(getByCategory(catId, catName, 0, 1, language));
  }

  return (
   
      <div className="ul">
        <p className="liTitle">CATEGORIAS</p>
        {categories.map((cat) => (
          <p
            className="li"
            key={cat.name}
            name={cat.nicename}
            value={cat.nicename}
            onClick={() => handleCat(cat.category_id, cat.name)}
          >
            {cat.name}
          </p>
        ))}
      </div>

  );
}

export default MenuCategories;
