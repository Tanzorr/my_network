import {toggleFollowingProgress} from "./users-reducer";
import {usersAPI,profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST ='DELETE_POST';
const SAVE_PHOTO_SUCCESS ='SAVE_PHOTO_SUCCESS';

let initialState ={

        posts: [
            {id: 1, post: 'Dimych hi',likesCount:12},
            {id: 2, post: 'Alex first post',likesCount: 34}
        ],
        newPostText:'',
        profile:null,
        status: ""
};

const profileReducer =(state=initialState , action)=> {

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
            return {...state, profile:{...state.profile, posts: action.photos} }
        }
        default:
            return state;
    }
}

export const addPostActionCreator = (newPostBody)=>{
    return{
        type:ADD_POST,
        newPostBody
    }
};

export const setStatus =(status)=>({type: SET_STATUS, status});

export const savePostoSuccess =(photos)=>({type:SAVE_PHOTO_SUCCESS, photos})

export  const setUserProfile = (profile)=>{

    return {
        type: SET_USER_PROFILE,
        profile
    }
};

export  const getStatus = (userId)=>{
    return async (dispatch)=>{
       let response = await profileAPI.getStatus(userId);
       alert(response)
        dispatch (setStatus(response.data));
    }
};

export  const updateStatus = (status)=>{
    console.log('status2',status);
    return async (dispatch)=>{
       let response = await profileAPI.updateStatus(status);
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status));
            }
    }
};

export const deletePost =(postId)=>({type:DELETE_POST, postId})



export const getUser = (userId)=>{
    return async (dispatch)=> {
        dispatch(toggleFollowingProgress(true, userId));
        let data = await usersAPI.getProfile(userId);
        dispatch(setUserProfile(data));
    }
};

export const savePhoto = (file)=>{
    return async (dispatch)=> {
        let reaponse = await usersAPI.savePhoto(file);
        if (reaponse.data.resultCode === 0){
            dispatch(savePostoSuccess(reaponse.data.photos))
        }
    }
};



export default profileReducer;
