import React from 'react';
import DialogItem from './dialogs-item/dialog-item';
import s from './dialogs.module.css';
import Message from "./message/message";
import {Redirect} from "react-router-dom";
import AddMessageReduxForm from "./message-form/message-form";

const Dialogs = (props) => {
    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map((dialog) => <DialogItem name={dialog.name} id={dialog.id} img={dialog.img} />);
    let messagesElements = state.messages.map((message) => <Message message={message.message} />);
    let newMessageText = state.newMessageText;

    const addMessage = (value) => {
        console.log(value);
        props.sendMessage(value.textMessage);
    }

    if (!props.isAuth) {
        return <Redirect to='/login' />
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <AddMessageReduxForm onSubmit={addMessage} />
            </div>
        </div>
    )
}

export default Dialogs;
