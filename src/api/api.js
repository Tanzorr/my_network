import * as axios from "axios";



const instance =  axios.create({
    withCredentials:true,
    baseURI:'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "246fdf62-0bab-41d9-a587-285f4f1dc67e"
    }
});

export const usersAPI ={
    getUsers(currentPage=1,pageSize=10){
        return  instance.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`,
            )
            .then(response=>{
                return response.data;
            })
    },

    follow(userId){
       return  instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
    },

    unfollow(userId){
       return  instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)

    }

};


