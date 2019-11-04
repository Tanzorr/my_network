import React from  'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../comon/FormsControl/FormsControls";
import {required, maxLengthCriator} from "../../utils/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import style from "../comon/FormsControl/FormsControls.module.css";



const LoginForm = (props)=>{
    let maxlength15 = maxLengthCriator(16);
    return (

        <form onSubmit={props.handleSubmit}>
            <div>
                <Field  placeholder={"Email"}
                        validate={[required, maxlength15 ]}
                        name={"email"} component={Input}/>
            </div>
            <div>
                <Field placeholder={"Password"}
                       validate={[required, ]}
                       name={"password"}
                       type={"password"}
                       component={Input}/>
            </div>
            <div>
                <Field component ={Input}
                       validate={[required]}
                       name={"rememberMe"} type="checkbox"/> remember me
            </div>
            {props.error &&
            <div className={style.formSummaryError}>

            </div>
            }
            <div>
                <button>Login</button>
            </div>
        </form>
    )

};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);


const Login= (props)=>{
    const onSubmit =(formData)=>{
        console.log(formData);
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