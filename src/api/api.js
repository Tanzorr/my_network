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

    }

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




};

export const authAPI = {
        me(){
            return instance.get(`${baseURL}auth/me`)
        }
}


