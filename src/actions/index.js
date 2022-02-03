import axios from "axios";


//accion para setear en true loading del state
export function query(load) {
  return {
    type: "QUERY",
    payload: load,
  };
}

//accion para traer los libros de la api Open Libra (con axios)
export function getBooks(page, pageNumber, lang) {
  return async function (dispatch) {
    try {
      var json = await axios.get(
        `https://www.etnassoft.com/api/v1/get/?lang=${lang}&results_range=${page}&order=newest`
      );

      if (json.data) {
        return dispatch({
          type: "GET-BOOKS",
          payload: json.data,
          load: false,
          search: false,
          pagina: page,
          nroPag: pageNumber,
          categ: false,
          bookDetail: {},
          language: lang,
        });
      }
    } catch (error) {
      alert("No se pudieron obtener los datos", error);
    }
  };
}


//acción que busca en la api Open Libra una palabra, por titulo o por autor
export function searchBook(query) {
  return async function (dispatch) {
    try {
      var json = await axios.get(
        `https://www.etnassoft.com/api/v1/get/?book_title=${query}`
      );
      if (json.data.length > 0) {
        return dispatch({
          type: "SEARCH-BOOK",
          payload: json.data,
          load: false,
          search: true,
          query: query,
          bookDetail: {},
        });
      } else {
        var json2 = await axios.get(
          `https://www.etnassoft.com/api/v1/get/?book_author=${query}`
        );

        return dispatch({
          type: "SEARCH-BOOK",
          payload: json2.data,
          load: false,
          search: true,
          query: query,
          bookDetail: {},
        });
      }
    } catch (error) {
      console.log("No se pudo obtener la query", error);
    }
  };
}

//acción para obtener todas las categorias de la api Open Libra
export function getCategories() {
  return async function (dispatch) {
    try {
      var cat = await axios.get(
        `https://www.etnassoft.com/api/v1/get/?get_categories=all`
      );
      return dispatch({
        type: "GET-CATEGORIES",
        payload: cat.data,
      });
    } catch (error) {
      console.log("No se obtuvieron las categorías", error);
    }
  };
}

//accion para obtener libros de la api Open Libra por ID de categoría
export function getByCategory(catId, catName, page, pageNumber, lang) {
  return async function (dispatch) {
    try {
      var categ = await axios.get(
        `https://www.etnassoft.com/api/v1/get/?category_id=${catId}&lang=${lang}&results_range=${page}`
      );
      return dispatch({
        type: "GET-BY-CATEGORY",
        payload: categ.data,
        categ: true,
        id: catId,
        categName: catName,
        load: false,
        search: false,
        pagina: page,
        nroPag: pageNumber,
        bookDetail: {},
        language: lang,
      });
    } catch (error) {
      console.log("No se obtuvieron datos", error);
    }
  };
}

//accion para llenar el State de redux bookDetail con el libro cliqueado
export function getBookDetail(book) {
  return {
    type: "GET-BOOK-DETAIL",
    payload: book,
  };
}

//accion para poner el state de bookDetail como obj vacío
export function exitDetail() {
  return {
    type: "EXIT-DETAIL",
    payload: {},
  };
}

//accion para cambiar el lenguaje de libros en el Stste de redux
export function changeLanguage(lang) {
  return {
    type: "CHANGE-LANGUAGE",
    payload: lang,
  };
}
