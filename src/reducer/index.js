const initialState = {
  books: [],
  loading: true,
  search: false,
  query:"",
  page: 0,
  numberPage: 1,
  categories: [],
  categ: false,
  idCateg: 0,
  categName: "",
  bookDetail: {},
  language: ""
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "QUERY":
      return {
        ...state,
        loading: action.payload,
      };

    case "GET-BOOKS":
      let array = action.payload;

      if (array) {
        return {
          ...state,
          books: action.payload,
          loading: action.load,
          search: action.search,
          page: action.pagina,
          numberPage: action.nroPag,
          categ: action.categ,
          bookDetail: action.bookDetail,
          language: action.language
        };
      } else {
        alert("No hay mas libros", state.books);
        return { ...state };
      }

    case "SEARCH-BOOK":
      if (action.payload.length > 0) {
        return {
          ...state,
          books: action.payload,
          loading: action.load,
          search: action.search,
          query: action.query
        };
      } else{
        alert("no encontrados");
        return {
          ...state,
          loading: action.load,
        };
      } 

    case "GET-CATEGORIES":
      return {
        ...state,
        categories: action.payload,
      };

    case "GET-BY-CATEGORY":
      return {
        ...state,
        books: action.payload,
        categ: action.categ,
        idCateg: action.id,
        categName: action.categName,
        loading: action.load,
        search: action.search,
        page: action.pagina,
        numberPage: action.nroPag,
        bookDetail: action.bookDetail,
        language: action.language
      };
    
    case "GET-BOOK-DETAIL":
      return{
        ...state,
        bookDetail: action.payload
      };

      case "EXIT-DETAIL":
      return{
        ...state,
        bookDetail: action.payload
      };

      case "CHANGE-LANGUAGE":
        return{
          ...state,
          language:action.payload
        }

    default:
      return state;
  }
}

export default rootReducer;
