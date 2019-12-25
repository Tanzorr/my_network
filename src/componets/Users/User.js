import React from 'react'
import styles from "./users.module.css";
import userPhoto from "../../assets/images/download.png";
import {NavLink} from "react-router-dom";



let User = ({user,followingInProgress,follow, unfollow})=>{

    return (<div>
                        <span>
                            <div>
                                <NavLink to={'/profile/'+ user.id}>
                                     <img src={user.photos.small != null ? user.photos.small:userPhoto} className={styles.usersPhoto} alt=""/>
                                </NavLink>
                            </div>
                            <div>
                                { user.followed ? <button
                                    disabled={followingInProgress.some(id=>id===user.id)}
                                        onClick={()=> {
                                            unfollow(user.id);
                                }} >UnFollow</button> :
                                    <button
                                        disabled={followingInProgress.some(id=>id===user.id)} onClick={ ()=>{
                                        follow(user.id);
                                    }}
                                    >Follow</button>}

                            </div>
                        </span>
                <span>
                            <div>{user.name}</div>
                            <div>{user.status}</div>
                            <div>{"u.lokation.country"}</div>
                            <div>{"u.lokation.city"}</div>
                        </span>
            </div> );


}

export default User;