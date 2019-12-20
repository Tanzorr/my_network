import React from "react";
import s from "./todolist.module.css";



const AdditReactList = (props)=>{

    return(
        <>
            <div className={s.inputWrap}>
                <label>Title: </label>
                <input onChange={onTitleChange} autoFocus={true} type="text" value={Title}/>
            </div>
            <div className={s.inputWrap}>
                <label>Description: </label>
                <textarea onChange={onDecscriptionChange}  >{Description}</textarea>
            </div>

            <input type="button"  value="Edit"/>
        </>
    )
};

