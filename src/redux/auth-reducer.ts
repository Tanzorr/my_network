import {authAPI, securityhAPI} from "../api/api";

const SET_USERS_DATA = 'my-netvorck/auth/SET-USERS-DATA';
const GET_CAPTCHA_URL_SUCCESS = 'my-netvorck/auth/GET_CAPTCHA_URL_SUCCESS';

export type InitialStateType2 ={
    userId: number | null ,
    email:string |null,
    login:string |null,
    isAuth:boolean,
    captchaUrl:string |  null
}


let initialState={
    userId: null as number | null,
    email:null as number | null,
    login:null as number | null,
    isAuth:false as boolean | null,
    captchaUrl:null //if null then captcha is not required
};

export type InitialStateType = typeof initialState;

const authReducer =(state=initialState , action:any): InitialStateType=> {
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
type SetAuthUserDataActionPayloadType ={
    userId: number | null
    email:string | null
    login:string | null
    isAuth:boolean | null
}

type SetAuthUserDataActionType ={
    type: typeof SET_USERS_DATA,
    payload: SetAuthUserDataActionPayloadType
}


export const setAuthUserData = (userId:number|null,email:string |null, login:string | null, isAuth:boolean | null):SetAuthUserDataActionType=>({
    type:SET_USERS_DATA, payload:
        {userId,email,login,isAuth}
});




type GetCaptCapthaUrlSuccessActionType = {
    type: typeof GET_CAPTCHA_URL_SUCCESS
    payload:{captchaUrl:string}
}

export const getCapthaUrlSuccess = (captchaUrl:string): GetCaptCapthaUrlSuccessActionType=>({
    type:GET_CAPTCHA_URL_SUCCESS,
    payload:{captchaUrl}
});

enum ResultCodesEnum{
    Success =0,
    Error =1,
    CaptchaIsRequired = 10
}

export const getAuthUserData =() => async(dispatch:any)=>{
    let meData = await authAPI.me();

        if(meData.resultCode === ResultCodesEnum.Success){
            let {id,email,login} = meData.data;
            dispatch (setAuthUserData(id, email, login, true));
        }

};


export const login =(email:string,password:string,rememberMe:boolean,captcha:any) =>async (dispatch:any)=>{
   let data = await authAPI.login(email,password,rememberMe, captcha);

        if(data.resultCode === ResultCodesEnum.Success){
         dispatch(getAuthUserData())
        }else{
            if (data.resultCode === ResultCodesEnum.CaptchaIsRequired) {
                dispatch(getCaptchaUrl());
            }

                //let message = data.messages.length > 0 ? data.messages[0] : "Some error";
               // dispatch(stopSubmit("login",{_error: message}));
            }

};


export const getCaptchaUrl =() =>async (dispatch:any)=>{
   const responce =await securityhAPI.getCaptchaUrl();
   const capthaUrl = responce.data.url;
   dispatch(getCapthaUrlSuccess(capthaUrl));
};





export const logout =() =>(dispatch:any)=>{
    authAPI.logout().then((response:any)=>{
        if(response.data.resultCode === 0){
            dispatch(setAuthUserData(null, null, null, false))
        }
    });
};


export default authReducer;