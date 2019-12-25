import React from "react";

const ButtonCoutner= (props)=>{
    console.log('counter props',props);
    return<div>
       <button onClick={props.handler}>Don't Click me</button>
    </div>
}

export default ButtonCoutner;
