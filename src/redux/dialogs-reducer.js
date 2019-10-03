const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT ='UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    messages:[
        {id: 1, message: 'Dimych'},
        {id: 2, message: 'Alex'},
    ],
    dialogs:[
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Alex'},
    ],

    newMessageText:''
};

const dialogsReducer =(state=initialState, action)=> {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                    id: 4,
                    message: state.newMessageText,
                    likesCount: 0
                };
                state.messages.push(newMessage);
                state.newMessageText = '';
                return state;

            case
                UPDATE_NEW_MESSAGE_TEXT:

                    state.newMessageText = action.newText;
                return state;

            default:
                return state;

            };


    };

export const addMessageActionCreator = ()=>{
    return{
        type:ADD_MESSAGE
    }
}

export const updateNewMessageActionCreator = (text)=>{
    return{
        type:UPDATE_NEW_MESSAGE_TEXT,
        newText:text
    }
}



export default dialogsReducer;