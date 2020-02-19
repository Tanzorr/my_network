import * as axios from "axios";


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
    getTodoLists(){
        return instance.get(`${baseURL}/todo-lists`).then((response)=>{return response});
    },


    getTodoList(id){
        return instance.get(`${baseURL}/todo-lists/${id}/tasks`).then((response)=>{return response});
    },

    removeTodoList(id){

        return instance.delete(`${baseURL}/todo-lists/${id}`).then((response)=>{return response});
    },

    addTodoList(title, description){
        return instance.post(`${baseURL}/todo-lists`,{title, description})
    },

    editTodoList(title, description,id){
        return instance.put(`${baseURL}/todo-lists${id}`,{title, description})
    },

    ///todo-lists/{todolistId}/tasks
    addTask(title, description, completed, status,priority,startDate,deadline,todoListId,order,addedDate){
        return instance.post(`${baseURL}/todo-lists/${todoListId}/tasks`,{title, description,completed,status,priority,startDate,deadline,order,addedDate})
    }


};


// todoAPI.addTask("task","description",true,3,2,Date.now(), Date.now(),"e1d6b5ff-4389-4d9e-89c3-95f0befc96b7",3, Date.now());
//
// let taskList = todoAPI.getTodoList("e1d6b5ff-4389-4d9e-89c3-95f0befc96b7");
//
// console.log("TaskList",taskList);


