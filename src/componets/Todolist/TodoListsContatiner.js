import React, {Component} from 'react';
import {connect} from "react-redux";
import {
    getCurrentPage,
    getFollovingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUserss
} from "../../redux/users-selectors";
import TodoItems from "./TodoItems"
import AddTodoList from "./AddTodoList"
import {getTasksLists, removeTasksList, addTasksList} from "../../redux/todolist-reducer"

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

        return (
            <div>
                <h1>Todo List</h1>
                <AddTodoList title={this.state.defaultTitle} add ={this.props.addTasksList} />

                <ul>
                    {tasksLists.map((tasksList)=> <TodoItems key={tasksList.id} task={tasksList.title} remove={this.props.removeTasksList} edit={this.props.addTasksList}  id={tasksList.id}/>)}
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

export default connect(mapStateToProps, {getTasksLists,removeTasksList, addTasksList})(TodoListsContatiner);