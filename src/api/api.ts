import  axios from "axios";
import {any} from "prop-types";
import {ProfileType} from "../componets/types/types";


let baseURL ='https://social-network.samuraijs.com/api/1.0/';

const instance =  axios.create({
    withCredentials:true,
    headers: {
        "API-KEY": "8b70a129-0d50-4fb8-99e7-15c4b370ea08"
    }
});

export const usersAPI ={
    getUsers(currentPage=1,pageSize=10){
        return  instance.get(`${baseURL}users?page=${currentPage}&count=${pageSize}`,
            )
            .then(response=>{
                return response.data;
            })
    },

    getProfile(userId:number){
        return profileAPI.getProfile(userId);
    },

    follow(userId:number){
       return  instance.post(`${baseURL}/1.0/follow/${userId}`)
    },

    unfollow(userId:number){
       return  instance.delete(`${baseURL}follow/${userId}`)

    },

};

export const profileAPI ={

    getProfile(userId:number){
        return instance.get(`${baseURL}profile/${userId}`).then(responce=>{return   responce.data});
    },

    getStatus(userId:number){
        return instance.get(`${baseURL}profile/status/${userId}`).then(responce=>{return   responce.data});
    },

    updateStatus(status:number){
        return instance.put(`${baseURL}profile/status`,{status});
    },
    savePhoto(photoFile:ProfileType |any){
        const formData = new FormData();
        formData.append("image",photoFile);
        return instance.put(`${baseURL}profile/photo`,formData, {
            headers:{
                'Content-Type':'multipart/form-data'
            }
        });
    },

    saveProfile(profile:ProfileType){

       let response = instance.put(`${baseURL}profile`,profile);


        return response;
    }
};

export enum ResultCodesEnum{
    Success =0,
    Error =1,
    CaptchaIsRequired = 10
}

export enum ResultCodesForCaptha{
    CaptcfahIsREquired =10
}


type MeResponseType = {
    data:{
        id:number
        email:string
        login:string
    }
    resultCode:ResultCodesEnum |ResultCodesForCaptha
    message:Array<string>
}

type LoginMeResponceType ={
    data:{
        userId:number
    }
    resultCode:ResultCodesEnum
}
export const authAPI = {
        me(){
            return instance.get<MeResponseType>(`${baseURL}auth/me`).then(res =>res.data);
        },

        login(email:string,password:string, rememberMe=false, captcha=null){

            return instance.post<LoginMeResponceType>(`${baseURL}auth/login`,{email,password,rememberMe})
                .then(res =>res.data);
        },

        logout(){
            return instance.delete(`${baseURL}auth/login`);
        }
};

export const securityhAPI = {
    getCaptchaUrl(){
        return instance.get(`${baseURL}security/get-captcha-url`);
    },

};


export  const todoAPI = {
    getTodoLists(){
        return instance.get(`${baseURL}/todo-lists`).then((response)=>{return response});
    },


    getTodoList(id:string){
        return instance.get(`${baseURL}/todo-lists/${id}/tasks`).then((response)=>{return response});
    },

    removeTodoList(id:string){

        return instance.delete(`${baseURL}/todo-lists/${id}`).then((response)=>{return response});
    },

    addTodoList(title:string){
        return instance.post(`${baseURL}/todo-lists`,{title})
    },

    editTodoList(title:string, description:string,id:string){
        return instance.put(`${baseURL}/todo-lists${id}`,{title})
    },

    ///todo-lists/{todolistId}/tasks
    addTask(title:string, description:string,todoListId:string, completed=true, status=1,priority=2,startDate=Date.now(),deadline=Date.now(),order=3,addedDate=Date.now()){
        return instance.post(`${baseURL}/todo-lists/${todoListId}/tasks`,{title, description,completed,status,priority,startDate,deadline,order,addedDate})
    },

    getTsakList(todolistId:string){
        return instance.get(`${baseURL}/todo-lists/${todolistId}/tasks`).then((response)=>{return response});
    },



};


// todoAPI.addTask("task","description",true,3,2,Date.now(), Date.now(),"e1d6b5ff-4389-4d9e-89c3-95f0befc96b7",3, Date.now());
//
// let taskList = todoAPI.getTodoList("e1d6b5ff-4389-4d9e-89c3-95f0befc96b7");
//
// console.log("TaskList",taskList);


