import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../../utilities/form-controls/form-controls";
import {maxLengthCreator, required} from "../../../utilities/validator/validator";

const maxLength50 = maxLengthCreator(50);

const MessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component={Textarea}
                    validate={[required, maxLength50]}
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
