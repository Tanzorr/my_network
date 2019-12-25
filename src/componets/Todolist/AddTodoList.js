import React, {useState, useEffect} from 'react';
import {connect} from "react-redux";
import {addTasksList} from "../../redux/todolist-reducer"


const AddTodoList = (props)=>{
    let [editMode,  setEditMode] =  useState(false);
    let [Title,  setTitle] =  useState("");
    let [Description,  setDescription] =  useState("");

    const activateMode = ()=>{
        setEditMode(true)
    };



    const onTitleChange = (e)=>{
        setTitle(e.currentTarget.value);
    };

    const onDecscriptionChange = (e)=>{
        setDescription(e.currentTarget.value);
    };

    const redirect = ()=>{
        props.history.push("/todolists")
    };



    return (
        <>
            <div>
                <label>Title: </label>
                <input onChange={onTitleChange} autoFocus={true} type="text" value={Title}/>
            </div>
           <div>
               <label>Description: </label>
               <textarea onChange={onDecscriptionChange}  >{Description}</textarea>
           </div>

            <input type="button"  onClick={()=>{props.addTasksList(Title, Description); redirect(); }  }value="add"/>
        </>
    )
}


const mapStateToProps =(state)=>({

});

export default connect(mapStateToProps,{addTasksList})(AddTodoList);