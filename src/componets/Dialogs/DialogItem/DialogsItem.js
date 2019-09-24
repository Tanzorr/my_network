import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import s from "./../Dialogs.module.css";

class DialogItem extends Component {
    render(props) {
        let path = "/dialogs/" + this.props.id;
        return (
            <div className={s.item}>
                <NavLink to={path}>{this.props.name}</NavLink>
            </div>
        );
    }
}

export default DialogItem;