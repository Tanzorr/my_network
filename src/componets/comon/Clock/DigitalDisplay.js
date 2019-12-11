import  React from "react";
import s from "./DigitalDispley.module.css";

const DigitalDisplay =(props)=>{
    return<div className={s.time}>{props.time}</div>
}

export  default  DigitalDisplay;