import axios from "axios";
import { BANNED_USER_FAIL, BANNED_USER_SUCCESS, DELETE_USER_FAIL, DELETE_USER_SUCCESS, GET_CURRENT_USER_FAIL, GET_CURRENT_USER_SUCCESS, GET_ONE_USER_FAIL, GET_ONE_USER_SUCCESS, GET_USERS_FAIL, GET_USERS_LOADING, GET_USERS_SUCCESS, LOGOUT, SIGNIN_USER_FAIL, SIGNIN_USER_SUCCESS, SIGNUP_USER_FAIL, SIGNUP_USER_SUCCESS, UPDATE_ONE_USER_FAIL, UPDATE_ONE_USER_SUCCESS } from "../contants/userTypes";
import { getAllAnnounces } from "./AnnouncementActions";


export const signupUser =  (user, navigate) => async (dispatch) =>{
try {

    const response = await axios.post("https://mern-app-final.herokuapp.com/users/registerUser", user)
    dispatch({type:SIGNUP_USER_SUCCESS, payload: response.data})
    navigate("/signin")
} catch (error) {
    console.log(error)
    dispatch({type: SIGNUP_USER_FAIL, payload: error})
}
}


export const signinUser = (user, navigate) => async (dispatch) => {
    try {
      const response = await axios.post(
        "https://mern-app-final.herokuapp.com/users/login",
        user
      );
      dispatch({ type: SIGNIN_USER_SUCCESS, payload: response.data });
      navigate("/announcelist");
    } catch (error) {
      console.log(error);
      dispatch({ type: SIGNIN_USER_FAIL, payload: error });
    }
  };

    export const getCurrentUser = ()=> async(dispatch)=>{
        const token = localStorage.getItem("token")
        try {
            const response = await axios("https://mern-app-final.herokuapp.com/users/currentUser", {headers:{Authorization:`Bearer ${token}`}})
            dispatch({type:GET_CURRENT_USER_SUCCESS, payload: response.data})
        } catch (error) {
            dispatch({type:GET_CURRENT_USER_FAIL, payload:error})
        }

    }


    export const editUser=(editUser,navigate) => async (dispatch) => {
        const token = localStorage.getItem("token")
        try {
           await axios.put(
            "https://mern-app-final.herokuapp.com/users/editUser",editUser, {headers:{Authorization:`Bearer ${token}`}}
          );
          dispatch({type:UPDATE_ONE_USER_SUCCESS})
          dispatch(getCurrentUser())
          navigate("/profile")
        } catch (error) {
          console.log(error);
          dispatch({type:UPDATE_ONE_USER_FAIL,payload:error})
        }
      };

      export const getOneUser=() => async (dispatch) => {
        try {
          const response = await axios.get(
            `https://mern-app-final.herokuapp.com/users/oneUser/?`
          );
          dispatch({type:GET_ONE_USER_SUCCESS,payload:response.data.oneUser})
        } catch (error) {
          console.log(error);
          dispatch({type:GET_ONE_USER_FAIL,payload:error})
        }
      };
      export const logoutUser = (navigate) => {
        navigate("/signin");
        return { type: LOGOUT };
      };


      export const getAllUsers = ()=> async dispatch=>{
        const token = localStorage.getItem("token")
        dispatch({type:GET_USERS_LOADING})
        try {
            const response=await axios.get("https://mern-app-final.herokuapp.com/users/allUsers/",{headers:{Authorization:`Bearer ${token}`}})
            dispatch({type: GET_USERS_SUCCESS, payload:response.data})
        } catch (error) {
            console.log(error)
            dispatch({type: GET_USERS_FAIL, payload: error})
        }
    
    }


    export const deleteUser =(id)=> async dispatch=>{
      try {
           await axios.delete(`https://mern-app-final.herokuapp.com/users/${id}`)
           dispatch({type:DELETE_USER_SUCCESS})
           dispatch(getAllAnnounces())
           dispatch(getAllUsers())
          } catch (error) {
              console.log(error);
              dispatch({type:DELETE_USER_FAIL , payload:error})
           }
  
  }



  export const bannedUser=(id,banned) => async (dispatch) => {
    const token = localStorage.getItem("token")
    try {
       await axios.put(
        `https://mern-app-final.herokuapp.com/users/bannedUser/${id}`,banned, {headers:{Authorization:`Bearer ${token}`}}
      );
      dispatch({type:BANNED_USER_SUCCESS, payload: {id, banned}})
      dispatch(getAllUsers())
   
    } catch (error) {
      console.log(error);
      dispatch({type:BANNED_USER_FAIL,payload:error})
    }
  };