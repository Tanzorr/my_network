import React, {Component} from 'react';
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Messages/Message";
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

class DialogsContainer extends Component {
    render(props) {

        console.log('dialigs state',  this.props.store.getState().dialogsPage);

        let state = this.props.store.getState().dialogsPage;


        let addMessage = ()=>{
            let action = addMessageActionCreator();
            this.props.store.dispatch(action);
        }


        let onMessageChange = (text)=>{
            let action = updateNewMessageActionCreator(text);
            this.props.store.dispatch(action);
        }

        return (
           <Dialogs updateNewMessageBody={onMessageChange} addMessage={addMessage} dialogsPage={state} />
        );
    }
}

export default DialogsContainer;