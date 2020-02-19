import React, {useState,useEffect} from 'react';
import {connect} from "react-redux";
import {getTasksListTile,getTaskList,getTasksLists} from "../../../redux/todolist-reducer"


const TodoListSingle = (props:any)=> {
    let id = props.match.params.todolistId;
    useEffect(()=>{
        props.getTaskList(id)
        props.getTasksListTile(id)
    },[])









        return (
            <div>
                <h1> {props.todoList.toDoListTile}</h1>
            </div>
        );

}
let mapStateToProps = (state:any)=>{

    return{
        todoList: state.todoList
    }
};


export default connect(mapStateToProps,{getTaskList,getTasksListTile,getTasksLists})(TodoListSingle);