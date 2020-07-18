import React from "react";
import { Field, reduxForm } from 'redux-form'
import {Input} from "../common/FormsControls/FormsControls";
import {maxLength24, minLength4} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";

const LoginForm = (props) => {
    const { handleSubmit } = props

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field component={Input}
                       name={'email'}
                       type='input'
                       label='Email'
                       validate={[maxLength24, minLength4]}
                />
            </div>
            <div>
                <Field component={Input}
                       name={'password'}
                       type='password'
                       label='Password'
                       validate={[maxLength24, minLength4]}
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
        props.login(formData.email, formData.password, formData.rememberMe);
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'} />
    } else {
        return (<div>
            <h1>Login page</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>);
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});

export default connect( mapStateToProps, {login} )(Login);