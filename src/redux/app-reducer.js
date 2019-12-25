import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {getAuthUserData} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';



let initialState ={
    initialized: false,

};

const appReducer =(state=initialState , action)=> {
    switch (action.type){
        case INITIALIZED_SUCCESS:
            console.log('a',action.data);
            return {
                ...state,
                initialized: true,
            };
        default:
            return state;
    }
};

export const initializedSuccess = (u)=>({
    type:INITIALIZED_SUCCESS,

});

export const initializeApp =() =>(dispatch)=>{
   let promise =  dispatch(getAuthUserData());
   Promise.all([promise])
       .then(()=>{
           dispatch(initializedSuccess())
       })
};




export default appReducer;