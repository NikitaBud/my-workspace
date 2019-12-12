import React from 'react';
import {Field, reduxForm} from "redux-form";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={'input'} name={'login'} placeholder='login' /><br/>
            <Field component={'input'} name={'password'} placeholder='password' /><br/>
            <Field component={'input'} name={'rememberMe'} type='checkbox'/>Remember me<br/>
            <button>Login</button>
        </form>
    )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);

export default LoginReduxForm;
