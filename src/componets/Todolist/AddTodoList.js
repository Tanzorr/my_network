import React, {useState, useEffect} from 'react';

const AddTodoList = (props)=>{
    let [editMode,  setEditMode] =  useState(false);
    let [defaultTitle,  setTitle] =  useState(props.title);

    const activateMode = ()=>{
        setEditMode(true)
    };

    const onTitleChange = (e)=>{
        setTitle(e.currentTarget.value);
    }


    return (
        <p>
            <input onChange={onTitleChange} autoFocus={true} type="text" value={defaultTitle}/>
            <input type="button"  value="add"/>
        </p>
    )
}

export default AddTodoList;