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

    getState(){
        return this._state;
    },

    _callSubscriber(){
        console.log('State changed');
    },

    addPost(){
        let newPost = {
            id:5,
            message:this._state.profilePage.newPostText,
            likesCount:0
        }


        this._state.profilePage.posts.push(newPost);
        this._callSubscriber(this._state);
        this._state.profilePage.newPostText ='';


    },

    updateNewPostText(newText){
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },

    subscribe(observer){
        this._callSubscriber = observer;
    },

}

console.log('in add post',store._state.profilePage.posts);



export default store;

window.store = store;