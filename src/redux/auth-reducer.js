import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USERS_DATA = 'my-netvorck/auth/SET-USERS-DATA';



let initialState ={
    userId: null,
    email:null,
    login:null,
    isAuth:false
    //isFetching:false
};

const authReducer =(state=initialState , action)=> {
    switch (action.type){
        case SET_USERS_DATA:
            console.log('a',action.data);
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

export const getAuthUserData =() => async (dispatch)=>{
    let response =await authAPI.me();

        if(response.data.resultCode === 0){
            let {id,email,login} = response.data.data;
            dispatch (setAuthUserData(id, email, login, true));
        }

};


export const login =(email,password,rememberMe) =>(dispatch)=>{
    authAPI.login(email,password,rememberMe).then(response=>{
        console.log("responce data",response.data.messages);
        if(response.data.resultCode === 0){
         dispatch(getAuthUserData())
        }else{

            let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
            dispatch(stopSubmit("login",{_error: message}));
        }
    });
};


export const logout =() =>(dispatch)=>{
    authAPI.logout().then(response=>{
        if(response.data.resultCode === 0){
            dispatch(setAuthUserData(null, null, null, false))
        }
    });
};


export default authReducer;