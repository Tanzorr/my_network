import {usersAPI,dialogAPI} from "../api/api";
import {getUsers, setTotalUsersCount, setUsers, toggleIsFetching} from "./users-reducer";

const ADD_MESSAGE = 'ADD-MESSAGE';
const SET_USERS_DIALOGS = 'SET_USERS_DIALOGS';


let initialState = {
    messages:[],
    dialogs:[
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Alex'},
    ],
};

const dialogsReducer =(state=initialState, action)=> {

    switch (action.type) {
        case ADD_MESSAGE:

            let newMessage = {
                id: 4,
                message: action.newMessageBody,
                likesCount: 0
            };
            return{
                ...state,
                messages: [...state.messages,newMessage]
            };
        case SET_USERS_DIALOGS:

           return {
               ...state,
               dialogs: action.users
           }


            default:
                return state;
           };
};


export const getUserss =(page,pageSize)=> {
    return async (dispatch)=> {
        dispatch(toggleIsFetching(true));
        let data = await usersAPI.getUsers(page, pageSize);
        dispatch(toggleIsFetching(false));
        dispatch(setDialogUsersActionCreator(data.items));
        dispatch(setTotalUsersCount(data.totalCount));

    }
};


export const addMessageActionCreator = (newMessageBody)=>{
    return{
        type:ADD_MESSAGE,
        newMessageBody
    }
};



export const  setDialogUsersActionCreator =(users)=>{
    return{
        type:SET_USERS_DIALOGS,
        users
    }
}





export default dialogsReducer;