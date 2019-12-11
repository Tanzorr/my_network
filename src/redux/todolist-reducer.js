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
    ]
}

const  todoListReducer =(state=initialState , action)  =>{
    switch (action) {
        case GET_TASKS ===action.type:
            return state
        case SET_TASKS === action.type:
            return {
                ...state, tasks: action.tasks
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
        tasks
    }
};

export const getTasksList= ()=>{
    return async ()=>{
        //dispatch(toggleIsFetching(true));
        let data = todoAPI.getTodoList();
        console.log("Data tasks",data);
       // dispatch(toggleIsFetching(false));
        setTasksLists(data.items);

    }
};


export  default todoListReducer;