import React from "react";
import styles from "./FormsControls.module.css";
import Field, {WrappedFieldProps} from "redux-form";
import {FieldValidatorType} from "../../../utils/validators";
import {string} from "prop-types";

type FormControlParamsType ={
    meta:{
        touched:boolean,
        error:string
    }

}

type FormsControlsType = (params:FormControlParamsType)=>React.ReactNode

export const FormControl:React.FC<WrappedFieldProps>  = ({ meta:{touched,error}, children}) =>{
    const hasError = touched && error;
    return(
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            <div>
               {children}
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
};

export const Textarea:React.FC<WrappedFieldProps> = (props) =>{
    const {input, meta, ...restProps} = props;
    return(
        <FormControl {...props} ><textarea {...input} {...restProps} /></FormControl>
    );
};

export const Input = (props:any) =>{
    const {input, meta,child, ...restProps} = props;
    return(
        <FormControl {...props} ><input {...input} {...restProps} /></FormControl>
    );

}

//
// export const createField = (placheolder:string, name:string, validators: Array:<FieldValidatorType>, componet, props={}, text = "")=>(
//     <div>
//         <Field pleceholder={placheolder} name={name}
//                validate={validators}
//                component={componet}
//                {...props}
//     />{text}
//     </div>
// )