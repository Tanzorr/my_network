import React, {Component} from 'react';
import * as ReactDOM from "react-dom";

class Logger extends Component {
    constructor(props){
        super(props)
        console.log("constructor")
}

    componentWillMount() {
        console.log("component will mount is trigered");
    }

    componentDidMount(e) {
        console.log("component Did mooutnt is triggered")
        console.log("Dom Node:", ReactDOM.findDOMNode(this));

    }

    componentWillReceiveProps(newProps) {
        console.log("component willReseweProps is triggered")
        console.log("new props:",newProps)
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log("shouldComponentUpdate is triggered")
        console.log("new props:", nextProps)
        console.log("new state:", nextState)
        return true
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        console.log(" componentWillUpdatee is triggered")
        console.log("new props:", nextProps)
        console.log("new state:", nextState)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(" componentDidUpdate is triggered")
        console.log("new props:", prevProps)
        console.log("new state:", prevState)
    }

    componentWillUnmount() {
        console.log(" componentWillUnmount")
    }


    render() {
        return (
            <div>
                {this.props.time}
            </div>
        );
    }
}

export default Logger;