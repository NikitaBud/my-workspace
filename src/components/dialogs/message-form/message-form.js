import React from 'react';
import {Field, reduxForm} from "redux-form";

const MessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component={'textarea'}
                    name={'textMessage'}
                    placeholder='Enter your message'/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const AddMessageReduxForm = reduxForm({ form: 'addMessageForm' })(MessageForm);

export default AddMessageReduxForm;
