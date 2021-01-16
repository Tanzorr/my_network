import {todoAPI} from "../api/api";



const GET_TASKS = 'GET_TASKS';
const SET_TASKSLISTS='SET_TASKSLISTS';
const REMOVE_TASKS_LIST = 'REMOVE_TASKS_LIST';
const ADD_TASKS_LIST ='ADD_TASKS_LIST';
const EDIT_TASK ='EDIT_TASK';
const GET_TASKSLIST_TITLE ='GET_TASKSLIST_TITLE';
const PUT_TASK_LIST_TITLE = 'PUT_TASK_LIST_TITLE';
const SET_TASKSLIST= 'SET_TASKSLIST';
const ADD_TASK= 'ADD_TASK';


type TaskType={
    id:number
    title:string
    description:string
    comlited:boolean
    status:number
    priority:number
    starDate:any
    deadline:any
    todoListId:string
    order:string
    addedDate:any
}

type TodoListType={
    id:number
    addedDate:any
    order:number | null
    title:string | null

}

// const Tasks={
//     taskists:[
//
//         {id:1, title:"todo list", description: "description first Task", complited: false, status: 1, priority:2, starDate: Date(),deadline: Date,
//             todoListId:"requred", order:3, addedDate:Date },
//         {id:2, title:"todo list2", description: "description first Task", complited: false, status: 1, priority:2, starDate: Date(),deadline: Date, todoListId:"requred", order:3, addedDate:Date },
//         {id:3, title:"todo list 3", description: "description first Task", complited: false, status: 1, priority:2, starDate: Date(),deadline: Date, todoListId:"requred", order:3, addedDate:Date }
//     ]as Array<TaskType>,
// }
const initialState = {
    todolists:[
        {id:1, addedDate:Date(), order:2, title:"title1"},
        {id:2, addedDate:Date(), order:2, title:"title2"},
        {id:3, addedDate:Date(), order:2, title:"title3"}
    ]as any,

    toDoListTile: "TodoListTitle" as string

}

type InitialStateTodoListType = typeof initialState

const  todoListReducer =(state=initialState , action:any):InitialStateTodoListType  =>{

    switch (action.type) {
        case SET_TASKSLISTS:
            return {
               ...state, todolists: action.tasks
            };

        case REMOVE_TASKS_LIST:
            const newLis = state.todolists.filter((item:TodoListType )=> {
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
                toDoListTile: action.title
                };
        case PUT_TASK_LIST_TITLE:

            return {
                ...state,
                toDoListTile:action.title
            }
    }

    return state;

};


type SetTasksListsACType ={
    type:typeof SET_TASKSLISTS
    tasks:Array<TodoListType>
}

const setTasksListsAC = (tasks:Array<TodoListType>):SetTasksListsACType=>{
    return{
        type:SET_TASKSLISTS,
        tasks
    }
};

type SetTasksListACType ={
    type:typeof SET_TASKSLIST
    tasks:Array<TaskType>
}

const setTasksListAC = (tasks:Array<TaskType>):SetTasksListACType=>{
    return{
        type:SET_TASKSLIST,
        tasks
    }
};

type SetTasksListsTitleACType ={
    type:typeof GET_TASKSLIST_TITLE
    title:string
}

const getTasksListTitleAC = (title:string):SetTasksListsTitleACType=>{
    return{
        type:GET_TASKSLIST_TITLE,
        title
    }
};

type RemoveListsTitleACType ={
    type:typeof REMOVE_TASKS_LIST
    id:number
}

const removeTasksListAC = (id:number)=>{
    return{
        type:REMOVE_TASKS_LIST,
        id
    }
};

type AddTasksListCType ={
    type:typeof ADD_TASKS_LIST
    title:string
}

const addTasksListAC = (title:string):AddTasksListCType=>{
    return{
        type:ADD_TASKS_LIST,
        title
    }
};

type AddTaskType ={
    type:typeof ADD_TASK
    title:string
    description:string
}

const addTaskAC = (title:string, description:string):AddTaskType=>{
    return{
        type:ADD_TASK,
        title,
        description
    }
};


type EditTasksListsACType ={
    type:typeof EDIT_TASK
    data:any
}

const edditTasklistAC =(data:any):EditTasksListsACType=>{
    return{
        type:EDIT_TASK ,
        data
    }
};

type PuttTasksListsACType ={
    type:typeof PUT_TASK_LIST_TITLE
    title:string
}

const putTasklistTitleAC =(title:string):PuttTasksListsACType=>{
    return{
        type:PUT_TASK_LIST_TITLE,
        title
    }
}


export const getTasksLists = ()=>{
    return async (dispatch:any)=>{
       // dispatch(toggleIsFetching(true));
        let data = await todoAPI.getTodoLists();
        console.log("Data",data.data);
        return dispatch(setTasksListsAC(data.data));
       // dispatch(toggleIsFetching(false));
    }
};

export const getTaskList =(id:string)=>{
    return async (dispatch:any)=>{
        let  data  = await  todoAPI.getTodoList(id);
        console.log("dataTList", data);
        return dispatch(setTasksListAC(data.data));
    }
}

export const getTasks=(id:string)=>{
    return async (dispatch:any)=>{
        let  data = await  todoAPI.getTsakList(id);
        return dispatch()
    }
}

export const getTasksListTile = (id:string)=>{
    console.log('getTasksListTile', id);
    return async (dispatch:any)=>{
        let data =  await  todoAPI.getTodoLists();
        let todoLists = data.data
        let todoItem  = todoLists.find((item:any)=>{
            return item.id===id;
        });


        return dispatch(getTasksListTitleAC(todoItem.title));
        // dispatch(toggleIsFetching(false));
    }
};


export const removeTasksList = (id:any)=>{
    return async (dispatch:any)=>{

         await todoAPI.removeTodoList(id);

         dispatch(removeTasksListAC(id));

    }
};


export const addTasksList = (title:string)=>{
    return async (dispatch:any)=>{
        await todoAPI.addTodoList(title);
        dispatch(addTasksListAC(title));
    }
};

export const addTaskProp = (title:string, description:string, taskList:string)=>{
    return async (dispatch:any)=>{
        await todoAPI.addTask(title,description,taskList);
    }
};




export const editTasksList = (title:string, descriptin:string,id:string)=>{
    return async (dispatch:any)=>{
     let data  =  await todoAPI.editTodoList(title, descriptin,id);
        dispatch(edditTasklistAC(data.data));
    }
};

export const putTitleTasklist = (title:string) =>{
    return async (dispatch:any)=>{

        dispatch(putTasklistTitleAC(title));
    }
}
//todoAPI.putTodoList("Test Title");




export  default todoListReducer;