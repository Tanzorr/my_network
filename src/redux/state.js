import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import dialogsReducer from "./dialogs-reducer"



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
        },

        sidebar:{}
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

       this._state.profilePage = profileReducer(this._state.profilePage, action);
       this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
       this._state.sidenar = sidebarReducer(this._state.sidebar, action);

       this._callSubscriber(this._state);

    }
}


export default store;

window.store = store;