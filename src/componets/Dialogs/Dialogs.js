import React, {Component} from 'react';
import s from "./Dialogs.module.css";
import { Redirect} from "react-router-dom";
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Messages/Message";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../comon/FormsControl/FormsControls";
import {maxLengthCriator, required} from "../../utils/validators";


class Dialogs extends Component {
    render(props) {

        let state = this.props;
        let dialogElements;
        let messagesElements;

        if (state.dialogsPage) {
            dialogElements = state.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
            messagesElements = state.dialogsPage.messages.map(m => <Message message={m.message}/>);
        }



        let addNewMessage = (v) => {
            this.props.addMessage(v.newMessageBody);
           };


        if(this.props.isAuth===false) return(<Redirect to={"/login"}/>);


        return<div className={s.dialogs}>
                <div className={s.dialogItems}>
                    {dialogElements}
                </div>
                <div className={s.messages}>
                    {messagesElements}
                    <div>
                    <AddMessageReduxForm onSubmit={addNewMessage}/>
                    </div>
                </div>
            </div>

    }

}

const maxlength = maxLengthCriator(50);

const AddMessageForm = (props)=>{
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       validate={[required,maxlength]}
                       name="newMessageBody" placeholder="Enter your message" />
            </div>
            <div>
                <button>add</button>
            </div>
        </form>
    )
};

const AddMessageReduxForm = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm);

export default Dialogs;