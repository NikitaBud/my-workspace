import React from 'react';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../../utilities/validator/validator";
import {Textarea} from "../../../../utilities/form-controls/form-controls";

const maxLength30 = maxLengthCreator(30);

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                component={Textarea}
                name={'textPost'}
                placeholder={'Enter your post'}
                validate={[required, maxLength30]}/>
            <button>Send Post</button>
        </form>
    )
}

const AddPostReduxForm = reduxForm({ form: 'addPost' })(AddPostForm);

export default AddPostReduxForm;
