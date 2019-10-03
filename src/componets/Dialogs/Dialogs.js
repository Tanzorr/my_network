import React, {Component} from 'react';
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Messages/Message";
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../redux/dialogs-reducer";

class Dialogs extends Component {
    render(props) {

        console.log('dialigs state',  this.props.store.getState().dialogsPage);

        let state = this.props.store.getState().dialogsPage;

        let dialogElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} /> );
        let messagesElements = state.messages.map(m => <Message message={m.message} />);
        let newMessageText = state.newMessageText;

        let addMessage = ()=>{
            let action = addMessageActionCreator();
            this.props.store.dispatch(action);
        }


        let onMessageChange = (e)=>{
            let text = e.target.value;
            let action = updateNewMessageActionCreator(text);
            this.props.store.dispatch(action);

        }

        return (
            <div className={s.dialogs}>
                <div className={s.dialogItems}>
                    { dialogElements}
                </div>
                <div className={s.messages}>
                    {messagesElements}

                    <div>
                        <div><textarea placeholder='Enter your message ' name="" id="message" onChange={onMessageChange}  value={newMessageText}/></div>
                        <div><button onClick={addMessage}>add</button></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dialogs;