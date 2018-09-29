import React, { Component } from 'react';


class Timer extends Component {

    componentDidMount(){
        this.ticker = setInterval(this.time ,1000);
    }
    constructor(props){
        super(props);
        this.state = { timer :0 };
        this.time = this.time.bind(this);
    }
    time(){
       this.setState({
           timer:new Date() - this.props.start
       })  
    }
    
    render() {
        var clock = Math.round(this.state.timer / 1000)
        return (
            <div>
                You hav been in the site for 
                <br/>
                <span>
                    {clock}
                </span>

            </div>
        );
    }
}

export default Timer;