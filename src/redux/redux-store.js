import {combineReducers, createStore} from "redux";

import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let redusers = combineReducers({
    profileReducer,
    dialogsReducer,
    sidebarReducer});

let  store = createStore(redusers);

export default store;