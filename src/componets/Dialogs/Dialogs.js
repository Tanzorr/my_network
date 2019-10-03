import React, {Component} from 'react';
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Messages/Message";
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../redux/state";

class Dialogs extends Component {
    render(props) {

        console.log('dialigs state', this.props.state.newMessageText);

        let dialogElements = this.props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} /> );
        let messagesElements = this.props.state.messages.map(m => <Message message={m.message} />);

        let addMessage = ()=>{
            let action = addMessageActionCreator();
            this.props.dispatch(action);
        }


        let onMessageChange = ()=>{
            let text = document.getElementById('message').value;
            let action = updateNewMessageActionCreator(text);
            this.props.dispatch(action);

        }

        return (
            <div className={s.dialogs}>
                <div className={s.dialogItems}>
                    { dialogElements}
                </div>
                <div className={s.messages}>
                    {messagesElements}

                    <div>
                        <div><textarea name="" id="message" onChange={onMessageChange}  value={this.props.state.newMessageText}/></div>
                        <div><button onClick={addMessage}>add</button></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dialogs;