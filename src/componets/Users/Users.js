import React from 'react'
import Paginator from "../comon/Paginator/Paginator";
import User from "./User";
import s from "./users.module.css";



let Users = ({currentPage,onpageChanged,totalUsersCount,pageSize, ...props}) =>{


    return <div >

        <Paginator currentPage ={currentPage} onpageChanged={onpageChanged} totalUsersCount={totalUsersCount} pageSize={pageSize}/>
        <div className={s.u_cantainer}>
        {
            props.users.map(u=><User user={u} followingInProgress={props.followingInProgress} key={u.id} follow={props.follow} unfollow={props.unfollow}_/>

            )
        }
        </div>
    </div>
}

export default Users;