import React from "react";
import { Field, reduxForm } from 'redux-form'
import {Input} from "../common/FormsControls/FormsControls";
import {maxLength12, minLength4} from "../../utils/validators/validators";

const LoginForm = (props) => {
    const { handleSubmit } = props

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field component={Input}
                       name={'login'}
                       type='input'
                       label='Login'
                       validate={[maxLength12, minLength4]}
                />
            </div>
            <div>
                <Field component={Input}
                       name={'password'}
                       type='input'
                       label='Password'
                       validate={[maxLength12, minLength4]}
                />
            </div>
            <div>
                <Field component={'input'}
                       name={'rememberMe'}
                       type='checkbox'
                /> Remember me
            </div>
            <div>
                <button type={"submit"}>Login</button>
            </div>
        </form>
    );
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData);
    }
    return (<div>
        <h1>Login page</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>);
}

export default Login;