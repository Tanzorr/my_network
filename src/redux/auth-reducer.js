const SET_USERS_DATA = 'SET-USERS-DATA';
const UNFOLLOW = 'UNFOLLOW';


let initialState ={
    userId: null,
    email:null,
    login:null,
    isAuth:false
    //isFetching:false
};

const authReducer =(state=initialState , action)=> {
    switch (action.type){
        case SET_USERS_DATA:
            console.log('a',action.data);
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
            default:
            return state;
    }
}

export const setAuthUserData = (userId,email, login)=>({type:SET_USERS_DATA ,data:{userId, email, login}});


export default authReducer;