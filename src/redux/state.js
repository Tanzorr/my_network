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
            ]
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
        if (action.type ==='ADD-POST'){
            let newPost = {
                id:5,
                message:this._state.profilePage.newPostText,
                likesCount:0
            }


            this._state.profilePage.posts.push(newPost);
            this._callSubscriber(this._state);
            this._state.profilePage.newPostText ='';
        }else if (action.type ==='UPDATE-NEW-POST-TEXT'){
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }



}

export const addPostActionCreator = ()=>{
    return{
        type:'ADD-POST'
    }
}

export const updateNewPostActionCreator = (text)=>{
    return{
        type:'UPDATE-NEW-POST-TEXT',
        newText:text
    }
}




export default store;

window.store = store;