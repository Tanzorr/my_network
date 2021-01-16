import {toggleFollowingProgress} from "./users-reducer";
import {usersAPI,profileAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {PhotosType, PostType} from "../componets/types/types";
import {ProfileType} from "../componets/types/types";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST ='DELETE_POST';
const SAVE_PHOTO_SUCCESS ='SAVE_PHOTO_SUCCESS';


let initialState ={

        posts: [
            {id: 1, post: 'Dimych hi',likesCount:12},
            {id: 2, post: 'Alex first post',likesCount: 34}
        ]as Array<PostType>,
        newPostText:'',
        profile:null as ProfileType |null,
        status: ""
};

export type InitislStateType = typeof  initialState;

const profileReducer =(state=initialState , action:any): InitislStateType=> {

    switch (action.type){
        case ADD_POST:{
            let newPost = {
                id: 5,
                post: action.newPostBody,
                likesCount: 0
            };
            return  {...state,
                posts:[...state.posts, newPost],

            };
        }

        case SET_STATUS:{
            return {...state,
                status: action.status
            };
        }
        case SET_USER_PROFILE:{
            return {...state, profile:action.profile};
        }
        case DELETE_POST:{
            return {...state,posts: state.posts.filter(p=>p.id !=action.postId)}
        }

        case SAVE_PHOTO_SUCCESS:{
            return {...state, profile:{...state.profile, photos: action.photos} as ProfileType }
        }
        default:
            return state;
    }
}

type AddPostActionCreatorActionType = {
    type: typeof  ADD_POST
    newPostBody:string
}

export const addPostActionCreator = (newPostBody:string):AddPostActionCreatorActionType=>{
    return{
        type:ADD_POST,
        newPostBody
    }
};

type SetStatusProfileType={
    type:typeof SET_STATUS
    status:string
}


export const setStatus =(status:string):SetStatusProfileType=>({type: SET_STATUS, status});

type SavePostoSuccessProfileType = {
    type: typeof  SAVE_PHOTO_SUCCESS
    photos:PhotosType
}

export const savePostoSuccess =(photos:string)=>({type:SAVE_PHOTO_SUCCESS, photos})

type SetUserProfileType = {
    type: typeof SET_USER_PROFILE
    profile:PostType
}

export  const setUserProfile = (profile:any):SetUserProfileType=>{

    return {
        type: SET_USER_PROFILE,
        profile
    }
};

type DeletePostProfileType ={
    type:typeof DELETE_POST
    postId:number
}

export const deletPost =(postId:number)=>{
    return{
        type:DELETE_POST,
        postId
    }

}

export  const getStatus = (userId:number)=>{
    return async (dispatch:any)=>{
       let response = await profileAPI.getStatus(userId);
       alert(response)
        dispatch (setStatus(response.data));
    }
};

export  const updateStatus = (status:any)=>{

    return async (dispatch:any)=>{
       let response = await profileAPI.updateStatus(status);
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status));
            }
    }
};





export const getUser = (userId:number)=>{
    return async (dispatch:any)=> {
        dispatch(toggleFollowingProgress(true, userId));
        let data = await usersAPI.getProfile(userId);
        dispatch(setUserProfile(data));
    }
};

export const savePhoto = (file:any)=>{
    return async (dispatch:any)=> {
        let reaponse = await profileAPI.savePhoto(file);
        if (reaponse.data.resultCode === 0){
            dispatch(savePostoSuccess(reaponse.data.photos))
        }
    }
};

export const saveProfile = (profile:ProfileType)=>{

    return async (dispatch:any,getState:any)=> {
       const userId = getState().auth.userId
        const response = await profileAPI.saveProfile(profile);
          if (response.data.resultCode === 0){
            dispatch(getUser(userId));
          }else {

              dispatch(stopSubmit("edit-profile",{_error: response.data.messages[0]}))
          }
    }
};




export default profileReducer;
