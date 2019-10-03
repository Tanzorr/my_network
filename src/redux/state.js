const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT ='UPDATE-NEW-MESSAGE-TEXT';
let store ={
    _state:{
        profilePage:{
            posts: [
                {id: 1, message: 'Dimych hi',likesCount:12},
                {id: 2, message: 'Alex first post',likesCount: 34}
            ],
            newPostText:'alex alex',


        },

        dialogsPage:{
            messages:[
                {id: 1, message: 'Dimych'},
                {id: 2, message: 'Alex'},
            ],
            dialogs:[
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Alex'},
            ],

            newMessageText:''
        }
    },

    _callSubscriber(){
        console.log('State changed');
    },

    subscribe(observer){
        this._callSubscriber = observer;
    },

    getState(){
        return this._state;
    },
    dispatch(action){
        if (action.type === ADD_POST){
            let newPost = {
                id:5,
                message:this._state.profilePage.newPostText,
                likesCount:0
            }
            this._state.profilePage.posts.push(newPost);
            this._callSubscriber(this._state);
            this._state.profilePage.newPostText ='';
        }else if (action.type === UPDATE_NEW_POST_TEXT){
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }else if (action.type === ADD_MESSAGE){
            let newMessage = {
                id:4,
                message:this._state.dialogsPage.newMessageText,
                likesCount: 0
            }

            this._state.dialogsPage.messages.push(newMessage);
            this._callSubscriber(this._state);
            this._state.dialogsPage.newMessageText='';
        }else if(action.type = UPDATE_NEW_MESSAGE_TEXT){
            this._state.dialogsPage.newMessageText = action.newText;
            this._callSubscriber(this._state);
        }
    }



}

export const addPostActionCreator = ()=>{
    return{
        type:ADD_POST
    }
}

export const updateNewPostActionCreator = (text)=>{
    return{
        type:UPDATE_NEW_POST_TEXT,
        newText:text
    }
}


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



export default store;

window.store = store;