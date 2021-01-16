import React, {FC} from 'react'
import Paginator from "../comon/Paginator/Paginator";
import User from "./User";
import s from "./users.module.css";
import {UserType} from "../types/types";

type PropsType ={
    totalUsersCount:number
    pageSize:number
    currentPage:number

    portionSize?:number
    onpageChanged:(pageNumber:number)=>void
    users:Array<UserType>
    followingInProgress:Array<number>
    follow:(userId:number)=>void
    unfollow:(userId:number)=>void
}


let Users:FC<PropsType> = ({currentPage,onpageChanged,totalUsersCount,pageSize,users, followingInProgress,follow, unfollow}) =>{


    return <div >

        <Paginator currentPage ={currentPage} onpageChanged={onpageChanged} totalUsersCount={totalUsersCount} pageSize={pageSize}/>
        <div className={s.u_cantainer}>
        {
            users.map((u:any)=><User user={u} followingInProgress={followingInProgress} key={u.id} follow={follow} unfollow={unfollow}/>

            )
        }
        </div>
    </div>
}

export default Users;