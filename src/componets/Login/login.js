import React from  'react';
import {Field, reduxForm, stopSubmit} from "redux-form";
import {Input} from "../comon/FormsControl/FormsControls";
import {required} from "../../utils/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import style from "./../comon/FormsControl/FormsControls.module.css";
import {createField} from "../../utils/object-helpers"

const LoginForm = ({handleSubmit,error})=>{
    return (
        <form onSubmit={handleSubmit}>
            {createField("email","email",[required], Input)}
            {createField("Password","password",[required], Input, {type: "password"})}
            {createField(null,"rememberMe", null, Input,{type: "checkbox"}, "remember me")}

            { error &&
                <div className={style.formControlSummeryError}>
                    {error}
                </div>
            }
                < div >

                <button>Login</button>
            </div>
        </form>
    )

};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);


const Login= (props)=>{
    const onSubmit =(formData)=>{
        console.log("form data",formData);
        props.login(formData.email, formData.password, formData.rememberMe);
    };

    if(props.isAuth){
        return <Redirect to={"/profile"}/>
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
};

const mapStateToProps =(state)=>({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps,{login})(Login);