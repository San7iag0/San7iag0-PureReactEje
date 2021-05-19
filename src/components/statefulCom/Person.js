import React, {Component} from 'react';

export default class Person extends Component{
    constructor(){
        super()
        this.state = {
            people: []
        }
    }
    componentDidMount(){
        fetch('https://randomuser.me/api/?results=5')
        .then(res =>{
            return res.json()
        })
        .then(JSON => {
            // console.log('results: ' + JSON.results)
            this.setState({
                people: JSON.results
            })
        })
    }
    

    render(){
        return(
            <>
            <div>
                <h1> Holi </h1>
                <ul>
                    {
                    this.state.people.map(fto =>
                        <li><img src={fto.picture.medium} /></li>    
                    )}
                </ul>
            </div>
            </>
        )
    }
}

