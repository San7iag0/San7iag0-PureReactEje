import React, {Component} from 'react';

function Greeitting(){
    const date = new Date();
    const hours = date.getHours()
    let timeOfDay;

    if(hours < 12){
        timeOfDay = "morning"
    } else if (hours >= 12 && hours < 17){
        timeOfDay = "afternoon"
    } else {
        timeOfDay = "night"
    }

    return (
        <h1> Good {timeOfDay} to you </h1>
    )
}

export default class Header extends Component{

    render(){
        return(
            <header>
                <p>Welcome, {this.props.username}</p>
                {/* { this.greeting } */}
                <Greeitting />
            </header>
        )
    }
}
