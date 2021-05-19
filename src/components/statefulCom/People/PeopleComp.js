import React, {Component} from 'react';

export default class PeopleComp extends Component{

    render(){
        return(
            <li>{this.props.name}</li>
        )
    }
}