import React, {Component} from 'react';
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Messages/Message";

class Dialogs extends Component {
    render(props) {

        console.log('dialigs state', this.props);

        let dialogElements = this.props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} /> );
        let messagesElements = this.props.state.messages.map(m => <Message message={m.message} />);

        return (
            <div className={s.dialogs}>
                <div className={s.dialogItems}>
                    { dialogElements}
                </div>
                <div className={s.messages}>
                    {messagesElements}
                </div>
            </div>
        );
    }
}

export default Dialogs;