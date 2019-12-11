import  React from "react";
import s from "./todolist.module.css";


const TodoItems = (props)=>{

    return(

        <li className={s.item}>{props.task}</li>
    )
};

export default TodoItems;