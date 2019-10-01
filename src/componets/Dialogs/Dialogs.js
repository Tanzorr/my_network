import React, {Component} from 'react';
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Messages/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";

class Dialogs extends Component {
    render(props) {

      //  console.log(this.props.store.getState().dialogsReducer().dialogs,'dialogs props');

        let data = this.props.store.getState().dialogsReducer;



        let dialogElements = data.dialogs.map(d => <DialogItem name={d.name} id={d.id} /> );
        let messagesElements = data.messages.map(m => <Message message={m.message} />);
        let newMessageBody =data.newMessageBody;



        let onSendMessageClick = ()=>{
            this.props.store.dispatch(sendMessageCreator());
        }

        let onNewMessageChange = (e)=>{
           let body = e.target.value;
            this.props.store.dispatch(updateNewMessageBodyCreator(body));
        }

        return (
            <div className={s.dialogs}>
                <div className={s.dialogItems}>
                    { dialogElements}
                </div>
                <div className={s.messages}>
                    <div>{messagesElements}</div>
                    <div>
                        <div><textarea
                            value={newMessageBody}
                            onChange={onNewMessageChange}
                            placeholder='Enter your message'></textarea></div>
                        <div><button onClick={onSendMessageClick}>Send</button></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dialogs;