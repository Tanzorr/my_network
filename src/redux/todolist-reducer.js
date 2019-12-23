import {todoAPI} from "../api/api";


const GET_TASKS = 'GET_TASKS';
const SET_TASKSLIST='SET_TASKSLIST';
const REMOVE_TASKS_LIST = 'REMOVE_TASKS_LIST';
const ADD_TASKS_LIST ='ADD_TASKS_LIST';
const EDIT_TASK ='EDIT_TASK';
const GET_TASKSLIST_TITLE ='GET_TASKSLIST_TITLE';

const initialState = {
    todolists:[

    {id:1, title:"todo list", description: "description first Task", complited: false, status: 1, priority:2, starDate: Date(),deadline: Date, todoListId:"requred", order:3, addedDate:Date },
    {id:2, title:"todo list2", description: "description first Task", complited: false, status: 1, priority:2, starDate: Date(),deadline: Date, todoListId:"requred", order:3, addedDate:Date },
    {id:3, title:"todo list 3", description: "description first Task", complited: false, status: 1, priority:2, starDate: Date(),deadline: Date, todoListId:"requred", order:3, addedDate:Date }
    ],

    toDoListTile: "TodoListTitle"

}

const  todoListReducer =(state=initialState , action)  =>{

    switch (action.type) {
        case SET_TASKSLIST:
            return {
               ...state, todolists: action.tasks
            };

        case REMOVE_TASKS_LIST:
            const newLis = state.todolists.filter(item => {
               return item.id !== action.id
            });
            return {
                ...state, todolists: newLis
            };
        case ADD_TASKS_LIST:
            let taskList =  {id:1,
                    title:action.title,
                    description: "description first Task",
                    complited: false,
                    status: 1,
                    priority:2,
                    starDate: Date(),
                    deadline: Date,
                    todoListId:"requred",
                    order:3,
                    addedDate:Date };
            return{
                ...state,
                todolists: [...state.todolists,taskList]
            };

        case GET_TASKSLIST_TITLE:
            return {
                ...state,
                toDoListTile: state.todolists.filter(item=>{
                    return item.id  === action.id
                })
            }


    }

    return state;

}




const setTasksListsAC = (tasks)=>{
    return{
        type:SET_TASKSLIST,
        tasks
    }
};

const getTasksListTitleAC = (data)=>{
    return{
        type:GET_TASKSLIST_TITLE,
        data
    }
};


const removeTasksListAC = (id)=>{
    return{
        type:REMOVE_TASKS_LIST,
        id
    }
};

const addTasksListAC = (title)=>{
    return{
        type:ADD_TASKS_LIST,
        title
    }
};


const edditTasklistAC =(data)=>{
    return{
        type:EDIT_TASK ,
        data
    }
}


export const getTasksLists = ()=>{
    return async (dispatch)=>{
       // dispatch(toggleIsFetching(true));
        let data = await todoAPI.getTodoLists();
        console.log("Data",data.data);
        return dispatch(setTasksListsAC(data.data));
       // dispatch(toggleIsFetching(false));
    }
};

export const getTasksListTile = (id)=>{

    return async (dispatch)=>{
        // dispatch(toggleIsFetching(true));
        let data = await todoAPI.getTodoList(id);
        console.log("GetListData", data.data);
        return dispatch(getTasksListTitleAC(data.data));
        // dispatch(toggleIsFetching(false));
    }
};


export const removeTasksList = (id)=>{
    return async (dispatch)=>{

         await todoAPI.removeTodoList(id);

         dispatch(removeTasksListAC(id));

    }
};


export const addTasksList = (title, descriptin)=>{
    return async (dispatch)=>{
        await todoAPI.addTodoList(title, descriptin);
        dispatch(addTasksListAC(title));
    }
};


export const editTasksList = (title, descriptin,id)=>{
    return async (dispatch)=>{
     let data  =  await todoAPI.editTodoList(title, descriptin,id);
        dispatch(edditTasklistAC(data.data));
    }
};
//todoAPI.putTodoList("Test Title");




export  default todoListReducer;