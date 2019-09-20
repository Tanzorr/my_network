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


        let messagesData =[
            {id: 1, message: 'Dimych'},
            {id: 2, message: 'Alex'},
        ]
        return (
            <div className={s.dialogs}>
                <div className={s.dialog_items}>
                   <DialogItem name={dialogs[0].name} id= {dialogs[0].id}/>
                   <DialogItem name={dialogs[1].name} id= {dialogs[1].id}/>

                </div>
                <div className={s.messages}>
                    <Message message = {messagesData[0].message}/>
                    <Message message = {messagesData[1].message}/>

                </div>
            </div>
        );
    }
}

export default Dialogs;