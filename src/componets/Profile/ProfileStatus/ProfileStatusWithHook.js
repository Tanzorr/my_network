import React, {useState, useEffect} from 'react';




const ProfileStatusWithHook  = (props)=>{

 let [editMode, setEditMode] =  useState(false);
 let [status, setStatus] =  useState(props.status);

 useEffect(()=>{
     setStatus(props.status);
 },[props.status]);

     const activateEditMode = ()=>{
            setEditMode(true)
     };

    const deActivateEditMode = ()=>{
        setEditMode(false);
        props.updateStatus(status);
    };

    const onStatusChange =(e)=>{
        setStatus(e.currentTarget.value);
    }

    return (
            <p>
                {!editMode &&
                    <div>
                       <b>Status</b>: <span onDoubleClick={activateEditMode} >{props.status || "---------"}</span>
                    </div>
                }
                {editMode &&
                    <div>
                        <input onChange={onStatusChange} type="text" onBlur={deActivateEditMode} value={status}/>
                    </div>
                }
            </p>
        );
    };


export default ProfileStatusWithHook;