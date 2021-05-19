import React, {Component} from 'react';
import PeopleComp from './PeopleComp'

export default class Poeple extends Component{
    constructor(){
        super()
        this.state = {
            peopleNameList: []
        }
    }
    componentDidMount(){
        fetch('https://randomuser.me/api/?results=5')
        .then(res => {
            return res.json()
        })
        .then(JSON => {
            this.setState({
                peopleNameList: JSON.results
            })
            console.log(this.state.peopleNameList);  
            console.log(JSON.results[1].name.first);  
        })
    }

    dateMethod(){
        return Date()
    }

    render(){
        return(
            <div>
                <p>{this.dateMethod()}</p>
                <ul>
                    {
                        this.state.peopleNameList.map(nm => {
                            return (
                                <PeopleComp name= {nm.name.first}/>
                            )
                        })
                    }                
                </ul>
            </div> 
        )
    }
}