import {createStore, combineReducers, applyMiddleware} from 'redux';

import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import {reducer as formReducer} from 'redux-form';
import appReducer from "./app-reducer";
import todoListrReducer from "./todolist-reducer"


let rootReducer = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    todoList:todoListrReducer,
    sidebar:sidebarReducer,
    usersPage:usersReducer,
    auth:authReducer,
    form: formReducer,
    app: appReducer

});

type RootReducerType = typeof rootReducer;
export type AppSateType = ReturnType<RootReducerType>

//let composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunkMiddleware)));

// @ts-ignore
window.store = store;


export default store;