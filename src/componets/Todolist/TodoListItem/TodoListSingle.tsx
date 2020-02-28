import React, {useState,useEffect} from 'react';
import PropTypes from 'prop-types'
import {connect} from "react-redux";
import {getTasksListTile,getTaskList,addTaskProp} from "../../../redux/todolist-reducer"
import AddTask from "./AddTask";



const TodoListSingle = (props:any)=> {
    let [addTask, setAddtask]= useState(false);
    let id = props.match.params.todolistId;
    useEffect(()=>{
        props.getTaskList(id)
        props.getTasksListTile(id)
    },[])
        console.log("prosTodo",props)
    return (

            <div>
                <h1> {props.title}</h1>
                {!addTask ?<button onClick={()=>{setAddtask(true)}}>Add task</button>: ""}

                {addTask? <AddTask id={id} AddTask={props.addTaskProp}/> :""}



            </div>
        );

}
let mapStateToProps = (state:any)=>{

    return{
        todoList: state.todoList,
        title:state.todoList.toDoListTile,


    }
};


export default connect(mapStateToProps,{getTaskList,getTasksListTile,addTaskProp})(TodoListSingle);