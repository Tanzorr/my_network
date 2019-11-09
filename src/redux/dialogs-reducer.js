const ADD_MESSAGE = 'ADD-MESSAGE';


let initialState = {
    messages:[
        {id: 1, message: 'Dimych'},
        {id: 2, message: 'Alex'},
    ],
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

                        default:
                return state;
           };
};

export const addMessageActionCreator = (newMessageBody)=>{
    return{
        type:ADD_MESSAGE,
        newMessageBody
    }
};





export default dialogsReducer;