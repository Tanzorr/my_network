import React, { Component } from 'react';
import {addMessageActionCreator,  getUserss} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state)=>{
    return{
        dialogsPage: state.dialogsPage
    }
};

let mapDispatchToProps = (dispatch)=>{
    return{
        addMessage:(newMessageBody)=>{
            let action = addMessageActionCreator(newMessageBody);
            dispatch(action);
        },
        getDialogs: ()=>{
            dispatch(getUserss())
        }

    }
};




export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);