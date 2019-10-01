const ADD_POST = 'ADD-POST';

const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initializeState = {
    posts: [
        {id: 1, message: 'Dimych hi',likesCount:12},
        {id: 2, message: 'Alex first post',likesCount: 34}
    ],
    newPostText:'alex alex',
};

const profileReducer = (state = initializeState , action)=>{
        switch (action.type) {
            case ADD_POST:
                let newPost = {
                    id:5,
                    message:state.newPostText,
                    likesCount:0
                };
                state.posts.push(newPost);
                state.newPostText ='';
                return state;

            case UPDATE_NEW_POST_TEXT:
                state.newPostText = action.newText;
                return  state;
            default:
                return  state;
        }
}


export const addPostActionCreator = ()=>{
    return({
        type : ADD_POST
    } )}

export const updateNewPostActionCreator = (text)=>{
    return{
        type:UPDATE_NEW_POST_TEXT,
        newText:text
    }
}


export default profileReducer;