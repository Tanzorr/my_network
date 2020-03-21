import React from "react";
import {Field, WrappedFieldProps} from "redux-form";
import {FieldValidatorType} from "./validators";

export const updeatObjecrInArray = (items:any,itemId:any,objPropName:any,newObjProps:any)=>{
    return items.map((u:any)=>{
        if(u[objPropName]===itemId){
            return {...u,...newObjProps}
        }
        return u;
    })
};



export function createField<FormKeysType extends string >(
                            placeholder:string |undefined |null
                            ,name:FormKeysType,
                            validate:Array<FieldValidatorType>,
                            component:React.FC<WrappedFieldProps>,
                            props={},text="") {
    return <div>
        <Field placeholder={placeholder}
               validate={validate}
               name={name}
               component={component}
               {...props}
        />{text}
    </div>

};
