import React from 'react';
import DialogItem from './dialogs-item/dialog-item';
import s from './dialogs.module.css';
import Message from "./message/message";
import {Redirect} from "react-router-dom";

const Dialogs = (props) => {
    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map((dialog) => <DialogItem name={dialog.name} id={dialog.id} img={dialog.img} />);
    let messagesElements = state.messages.map((message) => <Message message={message.message} />);
    let newMessageText = state.newMessageText;

    let sendMessage = () => {
        props.sendMessage();
    };

    let onMessageChange = (event) => {
        let text = event.target.value;
        props.updateNewMessageText(text)
    };

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
                <div className={s.newMessages}>
                    <div>
                        <textarea
                            onChange={ onMessageChange }
                            value={ newMessageText }
                            placeholder='Enter your message' />
                    </div>
                    <div>
                        <button onClick={ sendMessage }>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;
