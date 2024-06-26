import axios from "axios"
import {ADD_ANNOUNCE_FAIL, ADD_ANNOUNCE_SUCCESS, ADD_COMMENT, DELETE_ANNOUNCE_FAIL, DELETE_ANNOUNCE_SUCCESS, DELETE_ONE_ANNOUNCE_FAIL, DELETE_ONE_ANNOUNCE_SUCCESS, GET_ANNOUNCE_FAIL, GET_ANNOUNCE_LOADING, GET_ANNOUNCE_SUCCESS, GET_ONE_ANNOUNCE_FAIL, GET_ONE_ANNOUNCE_SUCCESS, POST_ERROR, REMOVE_COMMENT, UPDATE_LIKES, UPDATE_ONE_ANNOUNCE_FAIL, UPDATE_ONE_ANNOUNCE_SUCCESS} from "../contants/AnnounecementTypes"


export const getAllAnnounces = (query)=> async dispatch=>{
    dispatch({type:GET_ANNOUNCE_LOADING})
    try {
        const response=await axios.get(`https://mern-app-final.herokuapp.com/announcements/?${query}`)
        dispatch({type: GET_ANNOUNCE_SUCCESS, payload:response.data})
    } catch (error) {
        console.log(error)
        dispatch({type: GET_ANNOUNCE_FAIL, payload: error})
    }

}

// add announcement
export const addAnnounce = (newAnnounce, navigate)=> async dispatch=>{
    console.log(newAnnounce)
    const token=localStorage.getItem("token")
      try {
           await axios.post("https://mern-app-final.herokuapp.com/announcements/addAnnouncement", newAnnounce,{ headers: { Authorization: `Bearer ${token}` } })
           dispatch({type:ADD_ANNOUNCE_SUCCESS})
           dispatch(getAllAnnounces())
           navigate("/announcelist")
          } catch (error) {
              console.log(error);
              dispatch({type:ADD_ANNOUNCE_FAIL, payload:error})
              alert(error.response.data)
           }
  }

  export const getOneAnnounce=(id) => async (dispatch) => {
    try {
      const response = await axios.get(
        `https://mern-app-final.herokuapp.com/announcements/oneAnnounce/${id}`
      );
      dispatch({type:GET_ONE_ANNOUNCE_SUCCESS,payload:response.data.oneAnnounce})
    } catch (error) {
      console.log(error);
      dispatch({type:GET_ONE_ANNOUNCE_FAIL,payload:error})
    }
  };



  export const editAnnounce=(id,newAnnounce,navigate) => async (dispatch) => {
    try {
     await axios.put(
        `https://mern-app-final.herokuapp.com/announcements/${id}`,newAnnounce
      );
      dispatch({type:UPDATE_ONE_ANNOUNCE_SUCCESS})
      dispatch(getAllAnnounces())
      navigate("/announcelist")
    } catch (error) {
      console.log(error);
      dispatch({type:UPDATE_ONE_ANNOUNCE_FAIL,payload:error})
    }
  };

  export const deleteAnnounce = (id)=> async dispatch=>{
    const token = localStorage.getItem('token')
    try {
         await axios.delete(`https://mern-app-final.herokuapp.com/announcements/${id}`, { headers: { Authorization: `Bearer ${token}` } })
         dispatch({type:DELETE_ANNOUNCE_SUCCESS})
         dispatch(getAllAnnounces())
        } catch (error) {
            console.log(error);
            dispatch({type:DELETE_ANNOUNCE_FAIL , payload:error})
         }

}
//Lile and unlike announcement

export const addLikes = (id)=> async dispatch=>{    
  const token=localStorage.getItem("token")
  try {
    const response = await axios.put(`https://mern-app-final.herokuapp.com/announcements/like/${id}`,"" ,{ headers: { Authorization: `Bearer ${token}` } });
    dispatch({type: UPDATE_LIKES, payload:{id, likes: response.data}})
  } catch (error) {
    console.log(error.message)
    dispatch({type: POST_ERROR, payload:error})
  } 
}


  export const removeLikes = (id)=> async dispatch=>{
    const token=localStorage.getItem("token")
    try {
      const response = await axios.put(`https://mern-app-final.herokuapp.com/announcements/unlike/${id}`,"",{ headers: { Authorization: `Bearer ${token}` } });
      dispatch({type: UPDATE_LIKES, payload:{id, likes: response.data}})
    } catch (error) {
      console.log(error.message)
      dispatch({type: POST_ERROR, payload:error})
    }
  
  }



export const addComment = (id, text)=>async dispatch=>{
  const token = localStorage.getItem("token")
try {
  console.log(text);
 const response = await axios.post(`https://mern-app-final.herokuapp.com/announcements/comment/${id}`,text,{ headers: { Authorization: `Bearer ${token}` } });
 console.log(response);
 dispatch({type:ADD_COMMENT, payload:{id, comments: response.data }})
} catch (error) {
  console.log(error.message)
  dispatch({type: POST_ERROR, payload:error})
}
}


// Delete comment
export const deleteComment = (AnnounceId, commentId) => async dispatch => {  
  const token = localStorage.getItem("token")
  try {
    await axios.delete(`https://mern-app-final.herokuapp.com/announcements/comment/${AnnounceId}/${commentId}`, { headers: { Authorization: `Bearer ${token}`} });

    dispatch({
      type: REMOVE_COMMENT,
      payload: commentId
    });

  } catch (error) {
    dispatch({
      type: POST_ERROR,
      payload: error
    });
  }
};



//remove  oneAnnouncement
export const deleteOneAnnounce = (id)=> async dispatch=>{
  const token = localStorage.getItem('token')
  try {
       await axios.delete(`https://mern-app-final.herokuapp.com/announcements/delete/${id}`, { headers: { Authorization: `Bearer ${token}` } })
       dispatch({type:DELETE_ONE_ANNOUNCE_SUCCESS})
       dispatch(getAllAnnounces())
      } catch (error) {
          console.log(error);
          dispatch({type:DELETE_ONE_ANNOUNCE_FAIL , payload:error})
       }

}