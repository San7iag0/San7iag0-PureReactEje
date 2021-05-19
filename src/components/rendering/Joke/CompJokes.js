import React from 'react';
import {Button, Card } from 'react-bootstrap';


export default function CompJokes(props){
    return(
        <div>
            {               
            <Card
                bg={props.bg}
                style={{ width: '18rem' }}
                className="mb-2 text-center"
            >
                <Card.Header>{props.jokeTitle}</Card.Header>
                <Card.Body>
                    <Card.Title>{props.type} </Card.Title>
                    <Card.Text> {props.joke} </Card.Text>
                </Card.Body>
            </Card>         
            }
        </div>
    )
}

