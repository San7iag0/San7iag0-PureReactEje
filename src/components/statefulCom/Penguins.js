import React, {Component} from 'react';

export default class Penguins extends Component{
    constructor(){
        super()
        this.state = {
            penguins: [
                'http://c.files.bbci.co.uk/CF3C/production/_111925035_penguino.jpg',
                'https://i.redd.it/k7loh3wrx0v41.jpg',
                'https://cdn.mos.cms.futurecdn.net/hrBSCFbPcR5iTFxHFoJKXN-1200-80.jpg'
            ]
        }
    }

    render(){
        return(
            <>
                <ul>
                    {
                        this.state.penguins.map(url => 
                            <li><img style={{width:300 }}src={url}/></li>
                        )
                    }
                </ul>
            </>
        )
    }
    
}

