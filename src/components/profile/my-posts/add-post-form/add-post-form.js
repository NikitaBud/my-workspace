import React from 'react';
import {Field, reduxForm} from "redux-form";

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={'textarea'} name={'textPost'} placeholder={'Enter your post'} />
            <button>Send Post</button>
        </form>
    )
}

const AddPostReduxForm = reduxForm({ form: 'addPost' })(AddPostForm);

export default AddPostReduxForm;
