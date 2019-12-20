import React from 'react';
import  s from "./todolist.module.css";


const AddTodoList = (props)=>{


    return (
        <>
            <div className={s.inputWrap}>
                <label>Title: </label>
                <input  autoFocus={true} type="text" />
            </div>
           <div className={s.inputWrap}>
               <label>Description: </label>
               <textarea></textarea>
           </div>

            <input type="button"   value="add"/>
        </>
    )
};


export default AddTodoList;

