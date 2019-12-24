import React, {useState, useEffect} from 'react';
import {connect} from "react-redux";
import {getTasksListTile, getTasksLists} from "../../redux/todolist-reducer"


const EdditTodoList = ({
match, todoList, getTasksLists, getTasksListTile, history
})=>{
    let [editMode,  setEditMode] =  useState(false);
    let [Title,  setTitle] =  useState("");
    let [Description,  setDescription] =  useState(" ");


    const activateMode = ()=>{
        setEditMode(true)
    };

    const matchVal = match.params.todolistId;
    const toDoListTile = todoList.toDoListTile;


    useEffect(()=>{
            console.log("Todolist",toDoListTile);
            setTitle(toDoListTile[0].title);
            getTasksLists()
        if(toDoListTile !== 'TodoListTitle') {

            console.log("Todolist",toDoListTile);
            setTitle(toDoListTile[0].title);
        } else {
            console.log(' getTitle(match);');
            getTitle(matchVal);
        }
       },

   [matchVal, toDoListTile] );

    const getTitle = async (match) => {
       await getTasksLists();
       await getTasksListTile(match);
    };

    console.log('TITI', Title);


    const onTitleChange = (e)=>{
        setTitle(e.currentTarget.value);
    };

    const onDecscriptionChange = (e)=>{
        setDescription(e.currentTarget.value);
    };

    const redirect = ()=>{
        history.push("/todolists")
    };

    return (
        <div>
            <div>
                <label>Title:{} </label>
                <input onChange={onTitleChange} autoFocus={true} type="text" value={Title}/>
            </div>

            <input type="button" value="Edit"/>
        </div>
    )
}


const mapStateToProps =(state)=> {
    return {
        todoList: state.todoList
    }
};

export default connect(mapStateToProps,{getTasksListTile, getTasksLists})(EdditTodoList);