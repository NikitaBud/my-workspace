import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../../../utilities/form-controls/form-controls";
import {required} from "../../../utilities/validator/validator";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                component={Input}
                validate={[required]}
                name={'email'}
                placeholder='Email' />
            <Field
                component={Input}
                validate={[required]}
                name={'password'}
                placeholder='Password'
                type={'password'}/>
            <Field
                component={Input}
                name={'rememberMe'}
                type='checkbox'/>Remember me<br/>
            <button>Login</button>
        </form>
    )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);

export default LoginReduxForm;
