import {usersAPI,profileAPI} from "../api/api";

let internalState={}

type InitialStateType = typeof  internalState

const profileReducer =(state=internalState, action:any):InitialStateType=>{



    return state;
}

export default profileReducer;