import React, {Component} from 'react';

const TodoListSingle = (props:any)=> {

    let id = props.match.params.todolistId;
    console.log("todoId",id);

        return (
            <div>
                <h1> Todo lisst title</h1>
            </div>
        );

}

export default TodoListSingle;