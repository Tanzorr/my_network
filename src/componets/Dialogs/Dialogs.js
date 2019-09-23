import React, {Component} from 'react';
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem";
import Message from "./Message";

class Dialogs extends Component {
    render(props) {
        let dialogs =[
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Alex'},
        ];

        let messages =[
            {id: 1, message: 'Dimych'},
            {id: 2, message: 'Alex'},
        ];

        let dialogElements = dialogs.map(d => <DialogItem mame={d.name} id={d.id} /> );
        let messagesElements = messages.map(m => <Message message={m.message} />);

        return (
            <div className={s.dialogs}>
                <div className={s.dialog_items}>
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