import React, {Component} from 'react';
import Logger from "./Logger";
import ButtonCoutner from "./ButtonCounter";
import Couter from "./Counter";

class   Content extends Component {
    constructor(props){
        super(props)
        this.handleClick =  this.handleClick.bind(this);
        this.state ={
            counter:0,
        }
    }

    handleClick=(event)=>{
        
        this.setState({

            counter: ++this.state.counter
        })

    };

    render() {

     
        return (
            <div>
              <ButtonCoutner handler = {this.handleClick}/>

              <Couter count = {this.state.counter}/>
            </div>
        );
    }
}

export default  Content ;