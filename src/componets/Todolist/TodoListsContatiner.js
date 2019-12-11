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
import {} from "../../redux/todolist-reducer";

class TodoListsContatiner extends Component {
    componentDidMount() {

    }

    render(props) {
        console.log("todo props",this.props.todoList.todolists);
        let  tasks = this.props.todoList.todolists;

        return (
            <div>
                <h1>Todo List</h1>
                <ul>
                    {tasks.map((task)=> <TodoItems key={task.id} task={task.title}/>)}
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

export default connect(mapStateToProps, )(TodoListsContatiner);