import  React from "react";
import s from "./todolist.module.css";
import {NavLink} from "react-router-dom";


const TodoItems = ({id,remove,todoList, edit})=>{
        console.log("id",id);
    return(

        <li className={s.item}><NavLink to={'/TodoList/'+id}><b>{todoList}</b></NavLink><a onClick={()=>{remove(id)}} className={s.btnDanger}>Delete</a><a onClick={()=>{edit(id,todoList)}} className={s.btnPrimery}>Edit</a></li>
    )
};

export default TodoItems;