import React, {Component} from 'react';
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import TodoItems from "./TodoItems"
import AddTodoList from "./AddTodoList"
import {getTasksLists, removeTasksList,putTitleTasklist} from "../../redux/todolist-reducer"

class TodoListsContatiner extends Component {
    constructor(props){
        super(props);
        this.state={
            defaultTitle:"My title",
            editMode: false,
        }
    }


    componentDidMount() {
        this.props.getTasksLists()
    }

    render(props) {
        console.log("todo props",this.props.todoList.todolists);
        let  tasksLists = this.props.todoList.todolists;

        let addTList = ()=>{
           this.props.history.push("/todolistsadd")

        };

        let editTlist = (id,title)=>{
            this.props.history.push(`/editTodoList/${id}`)
            this.props.putTitleTasklist(title)
        };


        return (
            <div>
                <h1>Todo Lists</h1>
               <button onClick={addTList}>Add  todoList</button>

                <ul>
                    {tasksLists.map((tasksList)=> <TodoItems key={tasksList.id} edit={editTlist} todoList={tasksList.title} remove={this.props.removeTasksList}   id={tasksList.id}/>)}
                </ul>
            </div>
        );
    }
}

let mapStateToProps = (state)=>{

    return{
        todoList: state.todoList
    }
};

export default connect(mapStateToProps, {getTasksLists,removeTasksList, putTitleTasklist})(TodoListsContatiner);