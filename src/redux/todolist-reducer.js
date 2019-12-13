import {todoAPI} from "../api/api";
import {updeatObjecrInArray} from "../utils/object-helpers";
import {toggleIsFetching} from "./users-reducer";

const GET_TASKS = 'GET_TASKS';
const SET_TASKS ='SET_TASKS';

const initialState = {
    todolists:[

    {id:1, title:"todo list", description: "description first Task", complited: false, status: 1, priority:2, starDate: Date(),deadline: Date, todoListId:"requred", order:3, addedDate:Date },
    {id:2, title:"todo list2", description: "description first Task", complited: false, status: 1, priority:2, starDate: Date(),deadline: Date, todoListId:"requred", order:3, addedDate:Date },
    {id:3, title:"todo list 3", description: "description first Task", complited: false, status: 1, priority:2, starDate: Date(),deadline: Date, todoListId:"requred", order:3, addedDate:Date }
    ],

    toDoListTile: "TodoListTitle"

}

const  todoListReducer =(state=initialState , action)  =>{

    switch (action) {

        case SET_TASKS === action.type:
            alert(SET_TASKS);
            console.log("set taske",action.type);
            return {
               ...state, todolists:action.tasks
            }
    }

    return state;

}


const getTasksListActionCreatotr =()=>{
    return{
        type:GET_TASKS
    }
};

const setTasksLists = (tasks)=>{
    return{
        type:SET_TASKS,
        tasks:tasks
    }
};

export const getTasksList = ()=>{
    return async (dispatch)=>{
        //dispatch(toggleIsFetching(true));
        let data = await todoAPI.getTodoList();
        console.log("Data",data.data);
        return dispatch(setTasksLists(data.data));
       // dispatch(toggleIsFetching(false));
       // dispatch(setTasksLists(data.items));

    }
};

    // console.log( todoAPI.putTodoList("title34"));
    // console.log( todoAPI.getTodoList());
    // console.log( "getTaskList", getTasksList());



export  default todoListReducer;