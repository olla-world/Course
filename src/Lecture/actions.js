import Axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_HOST;

const fetchMenu = (courseName) => async (dispatch, getState)=>{
  dispatch({
    type: "FETCH_MENU_REQUEST"
  })
  try{
    const response = await Axios.get(
      BASE_URL + `/olla-world/Pattho-Dhara/main/${courseName}/menu.json`,
    )

    dispatch( {
      type: "FETCH_MENU_SUCCESS",
      payload: response.data.list
    })
  }catch(error){
    dispatch( {
      type: "FETCH_MENU_FAILURE",
      error
    })
  }
}

const fetchDetail = (courseName, lectureName) =>async (dispatch, getState)=>{
  dispatch({
    type: "FETCH_DETAIL_REQUEST"
  })
  try{
    const response = await Axios.get(
      BASE_URL + `/olla-world/Pattho-Dhara/main/${courseName}/${lectureName}/detail.md`,
    )
    dispatch( {
      type: "FETCH_DETAIL_SUCCESS",
      payload: response.data
    })
  }catch(error){
    dispatch( {
      type: "FETCH_DETAIL_FAILURE",
      error
    })
  }
}

const actions = {
    fetchMenu: fetchMenu,
    fetchDetail: fetchDetail
};

export default actions;