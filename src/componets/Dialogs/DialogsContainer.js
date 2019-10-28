import React, { Component } from 'react';
import { addMessageActionCreator, updateNewMessageActionCreator } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { Redirect} from "react-router-dom";

import {connect} from "react-redux";
import Profile from "../Profile/Profile";

let mapStateToProps = (state)=>{
    return{
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
};

let mapDispatchToProps = (dispatch)=>{
    return{
        onMessageChange:(text)=>{
            let action = updateNewMessageActionCreator(text);
            dispatch(action);
        },
        addMessage:()=>{
            let action = addMessageActionCreator();
            dispatch(action);
        }
    }
};

let AuthRedirectComponent = (props)=>{
    if (!props.isAuth) return <Redirect to={"/login"}/>
    return <Dialogs {...props}/>


};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer;