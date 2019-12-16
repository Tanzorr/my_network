import * as axios from "axios";

let baseURL ='https://social-network.samuraijs.com/api/1.0/';

const instance =  axios.create({
    withCredentials:true,
    headers: {
        "API-KEY": "246fdf62-0bab-41d9-a587-285f4f1dc67e"
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

    getProfile(userId){
        return profileAPI.getProfile(userId);
    },

    follow(userId){
       return  instance.post(`${baseURL}/1.0/follow/${userId}`)
    },

    unfollow(userId){
       return  instance.delete(`${baseURL}follow/${userId}`)

    },







};

export const profileAPI ={

    getProfile(userId){
        return instance.get(`${baseURL}profile/${userId}`).then(responce=>{return   responce.data});
    },

    getStatus(userId){
        return instance.get(`${baseURL}profile/status/${userId}`).then(responce=>{return   responce.data});
    },

    updateStatus(status){
        return instance.put(`${baseURL}profile/status`,{status});
    },
    savePhoto(photoFile){
        const formData = new FormData();
        formData.append("image",photoFile);
        return instance.put(`${baseURL}profile/photo`,formData, {
            headers:{
                'Content-Type':'multipart/form-data'
            }
        });
    },

    saveProfile(profile){
        console.log("profile2",profile);
       let response = instance.put(`${baseURL}profile`,profile);
       console.log("response",response.data);

        return response;
    }




};

export const authAPI = {
        me(){
            return instance.get(`${baseURL}auth/me`)
        },

        login(email,password, rememberMe=false, captcha=null){

            return instance.post(`${baseURL}auth/login`,{email,password,rememberMe});
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
    getTodoList(){
        return instance.get(`${baseURL}/todo-lists`).then((response)=>{return response});
    },

    removeTodoList(id){

        return instance.delete(`${baseURL}/todo-lists/${id}`).then((response)=>{return response});
    },

    putTodoList(title){
        return instance.post(`${baseURL}/todo-lists`,{title})
    }

}



