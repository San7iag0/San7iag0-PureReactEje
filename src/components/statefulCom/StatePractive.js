import React, {Component} from 'react';

export default class StatePractive extends Component{
    constructor(){
        super()
        this.state = {
            name: 'santi',
            birthY: 1992
        }
    }

    render(){
        return(
            <>
                <div>
                    <h1>{this.state.name}</h1>
                    <h2>
                    {
                        new Date().getFullYear() - this.state.birthY
                    }
                    </h2>
                </div>
            </>
        )
    }
}
