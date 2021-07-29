const initialState = {
    menu: [], 
    detail: null,
    loading: false,
    error: null
  };
  
  const reducers = (state=initialState, action) => {
    switch(action.type){
      case "FETCH_MENU_REQUEST":
        return {
          ...state,
          loading: true,
          error: null
        }
      case "FETCH_MENU_SUCCESS": 
        return { 
          ...state,
          menu: action.payload,
          loading: false
        }
      case "FETCH_MENU_FAILURE": 
        return { 
          ...state,
          loading: false,
          error: action.error
        }
      
      case "FETCH_DETAIL_REQUEST":
        return {
          ...state,
          detail:null,
          loading: true,
          error: null
        }
      case "FETCH_DETAIL_SUCCESS": 
        return { 
          ...state,
          detail: action.payload,
          loading: false
        }
      case "FETCH_DETAIL_FAILURE": 
        return { 
          ...state,
          loading: false,
          error: action.error
        }
      default:
          return state
    }
  }
  
  export default reducers