import {authAPI, securityhAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USERS_DATA = 'my-netvorck/auth/SET-USERS-DATA';
const GET_CAPTCHA_URL_SUCCESS = 'my-netvorck/auth/GET_CAPTCHA_URL_SUCCESS';



let initialState ={
    userId: null,
    email:null,
    login:null,
    isAuth:false,
    captchaUrl:null //if null then captcha is not required
};

const authReducer =(state=initialState , action)=> {
    switch (action.type){
        case SET_USERS_DATA:
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                ...action.payload,
            };
            default:
            return state;
    }
};

export const setAuthUserData = (userId,email, login, isAuth)=>({
    type:SET_USERS_DATA,
    payload:{userId, email, login, isAuth}
});

export const getCapthaUrlSuccess = (captchaUrl)=>({
    type:GET_CAPTCHA_URL_SUCCESS,
    payload:{captchaUrl}
});

export const getAuthUserData =() => async(dispatch)=>{
    let response = await authAPI.me();

        if(response.data.resultCode === 0){
            let {id,email,login} = response.data.data;
            dispatch (setAuthUserData(id, email, login, true));
        }

};


export const login =(email,password,rememberMe,captcha) =>async (dispatch)=>{
   let response = await authAPI.login(email,password,rememberMe, captcha);
        console.log("responce data",response.data.messages);
        if(response.data.resultCode === 0){
         dispatch(getAuthUserData())
        }else{
            if (response.data.resultCode === 1) {
                dispatch(getCaptchaUrl());
            }

                let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
                dispatch(stopSubmit("login",{_error: message}));
            }

};


export const getCaptchaUrl =() =>async (dispatch)=>{
   const responce =await securityhAPI.getCaptchaUrl();
   const capthaUrl = responce.data.url;
   dispatch(getCapthaUrlSuccess(capthaUrl));
};





export const logout =() =>(dispatch)=>{
    authAPI.logout().then(response=>{
        if(response.data.resultCode === 0){
            dispatch(setAuthUserData(null, null, null, false))
        }
    });
};


export default authReducer;