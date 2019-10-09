import React, { Component } from 'react';
import { addMessageActionCreator, updateNewMessageActionCreator } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

import {connect} from "react-redux";

let mapStateToProps = (state)=>{
    return{
        dialogsPage: state.dialogsPage
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

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;