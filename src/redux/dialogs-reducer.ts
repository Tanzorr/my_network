import {usersAPI} from "../api/api";
import {getUsers, setTotalUsersCount, setUsers, toggleIsFetching} from "./users-reducer";

const ADD_MESSAGE = 'ADD-MESSAGE';
const SET_USERS_DIALOGS = 'SET_USERS_DIALOGS';

type DialgType= {
    id:number
    name:string
}
type MessageType= {
    id:number
    message:string
}

let initialState = {
    messages:[]as Array<MessageType>,
    dialogs:[
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Alex'},
    ]as Array<DialgType>,
};

export type inittialStateType = typeof initialState

const dialogsReducer =(state=initialState, action:any)=> {

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


export const getUserss =(page:number,pageSize:number)=> {
    return async (dispatch:any)=> {
        dispatch(toggleIsFetching(true));
        let data = await usersAPI.getUsers(page, pageSize);
        dispatch(toggleIsFetching(false));
        dispatch(setDialogUsersActionCreator(data.items));
        dispatch(setTotalUsersCount(data.totalCount));

    }
};


type AddMessageGeneratorActionType ={
    type: typeof ADD_MESSAGE,
    newMessageBody:string

    
}

export const addMessageActionCreator = (newMessageBody:string):AddMessageGeneratorActionType=>{
    return{
        type:ADD_MESSAGE,
        newMessageBody
    }
};



export const  setDialogUsersActionCreator =(users:any)=>{
    return{
        type:SET_USERS_DIALOGS,
        users
    }
}





export default dialogsReducer;