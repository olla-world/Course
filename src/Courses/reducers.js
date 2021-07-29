const initialState = {
    courses: [], 
    loading: false,
    error: null
  };
  
  const reducers = (state=initialState, action) => {
    switch(action.type){
      case "FETCH_COURSES_REQUEST":
        return {
          ...state,
          loading: true,
          error: null
        }
      case "FETCH_COURSES_SUCCESS": 
        return { 
          ...state,
          courses: action.payload,
          loading: false
        }
      case "FETCH_COURSES_FAILURE": 
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