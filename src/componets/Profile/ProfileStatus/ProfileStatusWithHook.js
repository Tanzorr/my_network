import React, {useState, useEffect} from 'react';




const ProfileStatusWithHook  = (props)=>{

 let [editMode, setEditMode] =  useState(false);
 let [status, setStatus] =  useState(props.status);

 useEffect(()=>{
     setStatus(props.status);
 },[props.status]);

     const activateMode = ()=>{
            setEditMode(true)
     };

    const deActivateMode = ()=>{
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
                       <b>Status</b>: <span onDoubleClick={activateMode} >{props.status || "---------"}</span>
                    </div>
                }
                {editMode &&
                    <div>
                        <input onChange={onStatusChange} type="text" onBlur={deActivateMode} value={status}/>
                    </div>
                }
            </p>
        );
    };


export default ProfileStatusWithHook;