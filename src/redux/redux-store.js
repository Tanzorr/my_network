import {combineReducers, createStore} from "redux";

import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let redusers = combineReducers({
   profilePage: profileReducer,
   dialogsPage: dialogsReducer,
    sidebarReducer:sidebarReducer
});

let  store = createStore(redusers);

export default store;