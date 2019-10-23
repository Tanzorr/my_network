import React from 'react'
import styles from "./users.module.css";
import userPhoto from "../../assets/images/download.png";
import {NavLink} from "react-router-dom";
import * as axios from "axios";

let Users = (props) =>{

    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for(let i=1; i<=pageCount; i++){
        pages.push(i);
    }

    return <div>
        <div>
            {
                pages.map(p=>{
                    return  <span key={p} className={props.currentPage === p && styles.selectedPage}
                                  onClick={(e)=>{props.onpageChanged(p)}}>{p}</span>
                })
            }
        </div>
        {
            props.users.map(u=><div key={u.id}>
                        <span>
                            <div>
                                <NavLink to={'/profile/'+ u.id}>
                                     <img src={u.photos.small != null ? u.photos.small:userPhoto} className={styles.usersPhoto} alt=""/>
                                </NavLink>
                            </div>
                            <div>
                                { u.followed ? <button
                                    disabled={props.followingInProgress.some(id=>id===u.id)}
                                        onClick={()=> {
                                    props.toggleFollowingProgress(true,u.id);
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{
                                        withCredentials:true,
                                        headers: {
                                            "API-KEY": "246fdf62-0bab-41d9-a587-285f4f1dc67e"
                                        }
                                    })
                                        .then(response => {
                                            if (response.data.resultCode == 0){
                                                props.unfollow(u.id)
                                            }
                                            props.toggleFollowingProgress(false,u.id);
                                        });
                                }} >UnFollow</button> :
                                    <button
                                        disabled={props.followingInProgress.some(id=>id===u.id)} onClick={ ()=>{
                                        props.toggleFollowingProgress(true,u.id);
                                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{},{
                                        withCredentials:true,
                                        headers: {
                                            "API-KEY": "246fdf62-0bab-41d9-a587-285f4f1dc67e"
                                        }
                                    })
                                        .then(response => {
                                            if (response.data.resultCode == 0){
                                                props.follow(u.id)
                                                props.toggleFollowingProgress(false,u.id);
                                            }

                                        })
                                    }}
                                    >Follow</button>}

                            </div>
                        </span>
                <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                            <div>{"u.lokation.country"}</div>
                            <div>{"u.lokation.city"}</div>
                        </span>
            </div> )
        }
    </div>
}

export default Users;