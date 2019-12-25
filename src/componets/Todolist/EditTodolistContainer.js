import React, {Component} from 'react';
import {connect} from "react-redux";
import {editTasksList, getTasksLists, getTasksListTile} from "../../redux/todolist-reducer";

class EditTodolistContainer extends Component {
    constructor(props) {
        super(props)
        this.state={
            defaultTitle:"",
            editMode: false,
        }

    }

    componentWillMount() {
        this.props.getTasksLists();

    }

    componentDidMount() {
        setInterval(  ()=>{this.props.getTasksListTile(this.props.match.params.todolistId)},100000)

    }



    render(props) {
        const onTitleChange = (e)=>{
            this.setState({
                    defaultTitle: e.currentTarget.value
            });
        };

        console.log(this.props);

        console.log("id",this.props.match.params.todolistId);
        return (
            <div>
                <h1>Edit</h1>
                <div>
                    <label>Title:{} </label>
                    <input onChange={onTitleChange} autoFocus={true} type="text" value={this.state.defaultTitle}/>
                </div>

                <input type="button" value="Edit"/>
            </div>
        );
    }
}



const mapStateToProps =(state)=> {
    return {
        todoList: state.todoList
    }
};

export default connect(mapStateToProps,{getTasksListTile, getTasksLists, editTasksList})(EditTodolistContainer);