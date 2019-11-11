import {toggleFollowingProgress} from "./users-reducer";
import {usersAPI,profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST ='DELETE_POST';

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

export  const setUserProfile = (profile)=>{

    return {
        type: SET_USER_PROFILE,
        profile
    }
};

export  const getStatus = (userId)=>{
    return async (dispatch)=>{
       let response = await profileAPI.getStatus(userId)
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
    return (dispatch)=>{
        dispatch(toggleFollowingProgress(true,userId));
        usersAPI.getProfile(userId).then(
            data=>{ dispatch (setUserProfile(data));}
        )
    }
}


export default profileReducer;
