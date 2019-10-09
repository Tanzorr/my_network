const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState ={

        posts: [
            {id: 1, message: 'Dimych hi',likesCount:12},
            {id: 2, message: 'Alex first post',likesCount: 34}
        ],
        newPostText:'',
};

const profileReducer =(state=initialState , action)=> {

    switch (action.type){
        case ADD_POST:{
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            let copyState = {...state};
            copyState.posts = [...state.posts];
            copyState.posts.push(newPost);
            copyState.newPostText = "";
            return copyState;
        }
           case UPDATE_NEW_POST_TEXT:{
               let copyState = {...state};
               console.log(action.newText);
                copyState.newPostText = action.newText;
                return copyState;
            }
        default:
            return state;



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


export default profileReducer;