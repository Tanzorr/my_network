import React from  'react';
import {Field, InjectedFormProps, reduxForm, stopSubmit} from "redux-form";
import {Input} from "../comon/FormsControl/FormsControls";
import {required} from "../../utils/validators";
import {connect} from "react-redux";
import {login } from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import style from "./../comon/FormsControl/FormsControls.module.css";
import {createField} from "../../utils/object-helpers"
import {AppSateType} from "../../redux/redux-store";

type LoginFormOwnProps ={
    captchaUrl:string | null
}

const LoginForm:React.FC<InjectedFormProps<LoginFormValueType,LoginFormOwnProps>& LoginFormOwnProps> = ({handleSubmit,error,captchaUrl})=>{
    return (
        <form onSubmit={handleSubmit}>
            {createField<LoginFormValuesTypeKeys>("email","email",[required], Input)}
            {createField("Password","password",[required], Input, {type: "password"})}
            {createField<LoginFormValuesTypeKeys>(null,"rememberMe", [required], Input,{type: "checkbox"}, "remember me")}

            {captchaUrl && <img src={captchaUrl}/> }
            {captchaUrl && createField("Symbols from image","captcha",[required], Input, {}) }

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

const LoginReduxForm = reduxForm<LoginFormValueType,LoginFormOwnProps>({form: 'login'})(LoginForm);

type MapStateToPropsType = {
    captchaUrl:string | null,
    isAuth:boolean |null
}

type MapDispatchPropsType = {
    login:(email:string,password:string,rememberMe:boolean,captcha:any)=>void

}

type LoginFormValueType ={
    email:string,
    pasword:string,
    rememberMe:boolean,
    captcha:string
}

type  LoginFormValuesTypeKeys = Extract<keyof LoginFormValueType, string>

const Login:React.FC<MapStateToPropsType & MapDispatchPropsType>= (props)=>{
    const onSubmit =(formData:any)=>{

        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    };

    if(props.isAuth){
        return <Redirect to={"/profile"}/>
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
    </div>
};

const mapStateToProps =(state:AppSateType):MapStateToPropsType=>({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps,{login})(Login);