import  React from "react";
import s from "./todolist.module.css";


const TodoItems = ({id,remove,task})=>{
        console.log("id",id);
    return(

        <li className={s.item}><b>{task}</b><a onClick={()=>{remove(id)}} className={s.btnDanger}>Delete</a></li>
    )
};

export default TodoItems;