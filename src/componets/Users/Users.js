import React from 'react'
import styles from "./users.module.css";
import userPhoto from "../../assets/images/download.png";
import {NavLink} from "react-router-dom";
import Paginator from "../comon/Paginator/Paginator";
import User from "./User";
import {follow, followSuccess, unfollow} from "../../redux/users-reducer";


let Users = ({currentPage,onpageChanged,totalUsersCount,pageSize, ...props}) =>{


    return <div>

        <Paginator currentPage ={currentPage} onpageChanged={onpageChanged} totalUsersCount={totalUsersCount} pageSize={pageSize}/>
        <div>
        {
            props.users.map(u=><User user={u} followingInProgress={props.followingInProgress} key={u.id} follow={props.follow} unfollow={props.unfollow}_/>

            )
        }
        </div>
    </div>
}

export default Users;