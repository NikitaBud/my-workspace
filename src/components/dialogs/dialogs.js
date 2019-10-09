import React from 'react';
import DialogItem from './dialogs-item/dialog-item';
import s from './dialogs.module.css';
import Message from "./message/message";
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/dialogs-reducer";

const Dialogs = (props) => {
    let dialogsElements = props.state.dialogs
        .map((dialog) => <DialogItem
                                name={dialog.name}
                                id={dialog.id}
                                img={dialog.img}/>);

    let messagesElements = props.state.messages
        .map((message) => <Message
                                message={message.message}/>);

    let newMessageText = props.state.newMessageText;

    let sendMessage = () => {
        props.dispatch(sendMessageActionCreator())
    };

    let onMessageChange = (event) => {
        let text = event.target.value;
        let action = updateNewMessageTextActionCreator(text);
        props.dispatch(action);
    };

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