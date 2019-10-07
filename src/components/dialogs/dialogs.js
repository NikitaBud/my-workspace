import React from 'react';
import DialogItem from './dialogs-item/dialog-item';
import s from './dialogs.module.css';
import Message from "./message/message";

const Dialogs = (props) => {
    let dialogsElements = props.state.dialogs.map((dialog) => <DialogItem name={dialog.name} id={dialog.id}
                                                                          img={dialog.img}/>);

    let messagesElements = props.state.messages.map((message) => <Message message={message.message}/>);

    let newMessageElement = React.createRef();
    let addMessage = () => {
        let text = newMessageElement.current.value;
        alert(text);
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div className={s.newMessages}>
                    <div>
                        <textarea ref={ newMessageElement }></textarea>
                    </div>
                    <div>
                        <button onClick={ addMessage }>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;