import React, {useState, useEffect} from 'react';

const AddTodoList = ({add, title})=>{
    let [editMode,  setEditMode] =  useState(false);
    let [defaultTitle,  setTitle] =  useState(title);

    const activateMode = ()=>{
        setEditMode(true)
    };

    const clineInput =()=>{
        setTitle ("");
    };


    const onTitleChange = (e)=>{
        setTitle(e.currentTarget.value);
    };

    console.log("Add",add);


    return (
        <p>
            <input onChange={onTitleChange} autoFocus={true} type="text" value={defaultTitle}/>
            <input type="button"  onClick={()=>{add(defaultTitle); clineInput(); } }value="add"/>
        </p>
    )
}

export default AddTodoList;