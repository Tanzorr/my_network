import React, {Component} from 'react';
import DigitalDisplay from "./DigitalDisplay"
class Clock extends Component {
    constructor(props){

        super(props)
        this.launchClock()
        this.state = {currentTime:(new Date()).toLocaleTimeString()}
    }
    launchClock(){
        setInterval(()=>{
            console.log('Updating time...');
            this.setState({
                currentTime:(new Date()).toLocaleTimeString()
            })
        },1000)
    }

    render() {
        return (
            <div>
                {/*{this.state.currentTime}*/}
                <DigitalDisplay time={this.state.currentTime}/>
            </div>
        );
    }
}

export default Clock;