import React, {useState, useEffect} from 'react';

const AddTodoList = (props)=>{
    let [editMode, setEditMode] =  useState(false);


    return (
        <p>
            <input  type="text" value={props.title}/>
        </p>
    )
}

export default AddTodoList;