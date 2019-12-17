import React, {useState, useEffect} from 'react';
import s from "./todolist.module.css";
import AddTodoList from "./AddTodoList";


const TodoItems = ({id,remove,task,edit})=>{

    let [editMode,  setEditMode] =  useState(false);

    const activateEditMode = ()=>{
        setEditMode(true)
    };

    const deActivateEditMode = ()=>{
        setEditMode(false)
    };

    return(
        <li className={s.item}>
        {
            editMode &&
            <AddTodoList title={task} action={"edit"} edit={edit} add={edit} deactivat={deActivateEditMode}/>
        }
        {
            !editMode &&<p><b>{task}</b><a onClick={()=>{remove(id)}} className={s.btnDanger}>Delete</a><a onClick={activateEditMode} className={s.btnPrimary}>Edit</a></p>
        }
        </li>
    )
};

export default TodoItems;