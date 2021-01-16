import React,{useState,useEffect}   from 'react';
import PropTypes from 'prop-types'



const  AddTask =(props:any)=>{
    let [Title,  setTitle] =  useState("");
    let [Description,  setDescription] =  useState(" ");

    const onTitleChange = (e:any)=>{
        setTitle(e.currentTarget.value);
    };

    const onDecscriptionChange = (e:any)=>{
        setDescription(e.currentTarget.value);
    };
        console.log("addTask",props);
        return (
            <div>
                <div>
                    <label>Title</label>
                    <input type="text" onChange={onTitleChange} autoFocus={true}  value={Title} />
                </div>
                <div>
                    <label>Description</label>
                    <textarea onChange={onDecscriptionChange} >{Description}</textarea>
                    
                </div>
                <div>
                    <input onClick={()=>{props.AddTask(Title,Description, props.id)}} type="submit"/>
                </div>

            </div>
        );

}

AddTask.propTypes={
    id:PropTypes.string,
    AddTask:PropTypes.any
}

export default AddTask;