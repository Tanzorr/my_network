import React from 'react'
import styles from "./users.module.css";
import userPhoto from "../../assets/images/download.png";

let Users = (props) =>{
    console.log(props);
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
                                <img src={u.photos.small != null ? u.photos.small:userPhoto} className={styles.usersPhoto} alt=""/>
                            </div>
                            <div>
                                { u.followed ? <button onClick={()=>{props.unfollow(u.id)}}>Follow</button> : <button  onClick={()=>{props.follow(u.id)}}>UnFollow</button>}

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