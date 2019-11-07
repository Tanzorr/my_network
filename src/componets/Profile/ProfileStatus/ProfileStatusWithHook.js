import React, {useState} from 'react';




const ProfileStatusWithHook  = (props)=>{

 let [editMode, setEditMode] =  useState(false);
 let [status, setStatus] =  useState(props.status);

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
            <div>
                {!editMode &&
                    <div>
                        <span onDoubleClick={activateMode} >{props.status || "---------"}</span>
                    </div>
                }
                {editMode &&
                    <div>
                        <input onChange={onStatusChange} type="text" onBlur={deActivateMode} value={status}/>
                    </div>
                }
            </div>
        );
    };


export default ProfileStatusWithHook;