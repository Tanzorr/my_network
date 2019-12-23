import React, {useState, useEffect} from 'react';
import {connect} from "react-redux";
import {getTasksListTile} from "../../redux/todolist-reducer"


const EdditTodoList = (props)=>{
    let [editMode,  setEditMode] =  useState(false);
    let [Title,  setTitle] =  useState("");
    let [Description,  setDescription] =  useState(" ");

    console.log("Edit props",props);

    const activateMode = ()=>{
        setEditMode(true)
    };

    useEffect(()=>{
            props.getTasksListTile(props.match.params.todolistId)
       },

   [] );



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
        <div>
            <div>
                <label>Title: </label>
                <input onChange={onTitleChange} autoFocus={true} type="text" value={Title}/>
            </div>

            <input type="button" value="Edit"/>
        </div>
    )
}


const mapStateToProps =(state)=>({
        state
});

export default connect(mapStateToProps,{getTasksListTile})(EdditTodoList);