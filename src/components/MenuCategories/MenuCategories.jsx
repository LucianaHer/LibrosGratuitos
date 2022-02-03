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

  function handleCat(event) {
    if (event.target.value !== " ") {
      var datesCateg = event.target.value.split(",");
      let catId = parseInt(parseInt(datesCateg[0]));
      let catName = datesCateg[1];
      dispatch(query(true));
      dispatch(getByCategory(catId, catName, 0, 1, language));
      setTimeout(() => {
        document.getElementById("categs").selectedIndex = 0;
      }, 2000);
    }
  }

  return (
    <div className="custom-select">
      <div>
        <select
          className="selectItems"
          id="categs"
          onChange={(event) => handleCat(event)}
        >
          <option /* className="options" */ value=" " key={100}>
            CATEGORIAS
          </option>
          {categories.map((cat) => (
            <option
              className="options"
              key={cat.name}
              name={cat.nicename}
              value={[cat.category_id, cat.name]}
            >
              {cat.name}
            </option>
          ))}
        </select>
        <span className="custom-arrow"></span>
      </div>
    </div>
  );
}

export default MenuCategories;
