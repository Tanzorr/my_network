import React from 'react'
import styles from "./users.module.css";
import userPhoto from "../../assets/images/download.png";
import {NavLink} from "react-router-dom";


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
                                            props.unfollow(u.id);
                                }} >UnFollow</button> :
                                    <button
                                        disabled={props.followingInProgress.some(id=>id===u.id)} onClick={ ()=>{
                                        props.follow(u.id);
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