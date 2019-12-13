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
import {getTasksList} from "../../redux/todolist-reducer"

class TodoListsContatiner extends Component {
    constructor(props){
        super(props);
        this.state={
            defaultTitle:"My title",
            editMode: false,
        }
    }


    componentDidMount() {
        console.log("componet dim mount",this.props.getTasksList());

    }

    render(props) {
        console.log("todo props",this.props.todoList.todolists);
        let  tasks = this.props.todoList.todolists;

        return (
            <div>
                <h1>Todo List</h1>
                <AddTodoList title={this.state.defaultTitle} />

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

export default connect(mapStateToProps, {getTasksList})(TodoListsContatiner);