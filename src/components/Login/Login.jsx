import React from "react";
import {Field, reduxForm} from 'redux-form'
import classes from "./Login.module.css";
import {Input} from "../common/FormsControls/FormsControls";
import {maxLength24, minLength4} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";

const LoginForm = (props) => {
    const {handleSubmit} = props,
        error = props.error;

    return (
        <>
            <p>Зарегистрируйтесь, чтобы познать всю прелесть моей социальной сети.</p>
            <form onSubmit={handleSubmit}>
                <p className={classes.form_summary_error}>{error}</p>
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
                <div className={classes.loginBtnWrapper}>
                    <button type={"submit"}>Login</button>
                </div>
            </form>
        </>
    );
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {
    const login = props.login,
        isAuth = props.isAuth

    const onSubmit = (formData) => {
        login(formData.email, formData.password, formData.rememberMe);
    }

    if (isAuth) {
        return <Redirect to={'/profile'}/>
    } else {
        return (
            <div className={classes.loginForm}>
                <h2>Login page</h2>
                <LoginReduxForm onSubmit={onSubmit}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {login})(Login);