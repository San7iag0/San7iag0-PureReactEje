import React from 'react';
import {Button, Card } from 'react-bootstrap';
import productsData from './productsData';

export default function CompProds(props){
    return(
        <div>
        {       
        <Card
            bg='info'
            style={{ width: '18rem' }}
            className="mb-2 text-center"
        >
            <Card.Header>{props.price}</Card.Header>
            <Card.Body>
                <Card.Title>{props.name} </Card.Title>
                <Card.Text> {props.description} </Card.Text>
            </Card.Body>
        </Card>         
        }
        </div>
    )
}
