import  React from "react";
import s from "./todolist.module.css";


const TodoItems = ({id,remove,task})=>{
        console.log("id",id);
    return(

        <li className={s.item}><a onClick={()=>{remove(id)}}>{task}</a></li>
    )
};

export default TodoItems;