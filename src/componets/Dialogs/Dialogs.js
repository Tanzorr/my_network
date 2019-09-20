import React, {Component} from 'react';
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

class Dialogs extends Component {
    render(props) {
        return (
            <div className={s.dialogs}>
                <div className={s.dialog_items}>
                    <div className={s.item}>
                        <NavLink to="/dialogs/1">dimivh</NavLink></div>
                    <div className={s.item}>
                        <NavLink to="/dialogs/1"> ales</NavLink>
                    </div>


                </div>
                <div className={s.messages}>
                    <div className={s.message}>Hi</div>
                    <div className={s.message}>How are You</div>
                    <div className={s.message}>Yo</div>
                </div>
            </div>
        );
    }
}

export default Dialogs;