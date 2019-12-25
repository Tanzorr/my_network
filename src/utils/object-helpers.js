import React from "react";
import {Field} from "redux-form";

export const updeatObjecrInArray = (items,itemId,objPropName,newObjProps)=>{
    return items.map(u=>{
        if(u[objPropName]===itemId){
            return {...u,...newObjProps}
        }
        return u;
    })
};

export const createField = (placeholder,name,validate, component,props={},text="")=>(
                            <div>
                                <Field  placeholder={placeholder}
                                        validate={validate}
                                        name={name}
                                        component={component}
                                        {...props}
                                />{text}
                            </div>

);
