import Axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_HOST;

const fetchCourses = (keywords) => async (dispatch, getState)=>{
  dispatch({
    type: "FETCH_COURSES_REQUEST"
  })
  try{
    const response = await Axios.get(
      BASE_URL + '/olla-world/courses/main/coures.json',
    )

    dispatch( {
      type: "FETCH_COURSES_SUCCESS",
      payload: response.data.list
    })
  }catch(error){
    dispatch( {
      type: "FETCH_COURSES_FAILURE",
      error
    })
  }
}

const actions = {
    fetchCourses: fetchCourses
};

export default actions;