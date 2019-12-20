import  React from "react";
import s from "./todolist.module.css";
import {NavLink} from "react-router-dom";


const TodoItems = ({id,remove,task})=>{
        console.log("id",id);
    return(

        <li className={s.item}><b> <NavLink to={'/todolist/'+ id}>{task}</NavLink></b><a onClick={()=>{remove(id)}} className={s.btnDanger}>Delete</a></li>
    )
};

export default TodoItems;