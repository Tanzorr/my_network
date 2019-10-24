import React, {Component} from 'react';
import s from "./../Dialogs.module.css";

class Message extends Component {
    render(props) {
        return (
            <div>

                <div className={s.message}>{this.props.message}</div>
            </div>
        );
    }
}

export default Message;