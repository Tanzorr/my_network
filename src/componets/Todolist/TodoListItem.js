import React , {useState, useEffect} from "react";
import {connect} from "react-redux";
import { getTasksList } from "../../redux/todolist-reducer";




const TodoLlistItem = (props)=>{
               const [tasklis, setTasklist] = useState(null);

               useEffect(()=>{

                   console.log("I am born");
               },[]);
    let id =   props.match.params.listId;

    useEffect(()=>{
        props.getTasksList(id);}

    )



        console.log("TodoList",props);

        return<>
                <h1>{props.state.todoList.todolist.todoListTile}</h1>
                <p>{props.state.todoList.todolist.todoListDescription}</p>
            </>
};

const mapStateToProps =(state)=>({
        state
});

export default connect(mapStateToProps,{getTasksList})(TodoLlistItem);
