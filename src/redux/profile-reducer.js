import {toggleFollowingProgress} from "./users-reducer";
import {usersAPI,profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState ={

        posts: [
            {id: 1, message: 'Dimych hi',likesCount:12},
            {id: 2, message: 'Alex first post',likesCount: 34}
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
                message: state.newPostText,
                likesCount: 0
            };
            return  {...state,
                posts:[...state.posts, newPost],
                newPostText:''
            };
        }
           case UPDATE_NEW_POST_TEXT:{
                            return {...state,
                            newPostText: action.newText
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
        default:
            return state;
    }
}

export const addPostActionCreator = ()=>{
    return{
        type:ADD_POST
    }
};

export const updateNewPostActionCreator = (text)=>{
    return{
        type:UPDATE_NEW_POST_TEXT,
        newText:text
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
    return (dispatch)=>{
        profileAPI.getStatus(userId)
            .then(
            data=>{ dispatch (setStatus(data));}
        )
    }
};

export  const updateStatus = (status)=>{
    console.log('status2',status);
    return (dispatch)=>{
        profileAPI.updateStatus(status).then(response=> {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status));
            }

    });
}
};



export const getUser = (userId)=>{
    return (dispatch)=>{
        dispatch(toggleFollowingProgress(true,userId));
        usersAPI.getProfile(userId).then(
            data=>{ dispatch (setUserProfile(data));}
        )
    }
}


export default profileReducer;
