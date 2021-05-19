import React from 'react'
import {Button, Card } from 'react-bootstrap';

export default function ToDoComp(props){
    function handleClick(){
        alert('you are missing this task')
    }
    return(
        <div>
            <Card
                bg={
                    (props.Priority == 1) ? "Darger" : "Light"
                }
                style={{ width: '18rem' }}
                className="mb-2 text-center"
            >
                <Card.Header>To Do</Card.Header>
                <Card.Body>
                    <Card.Title> {props.title} </Card.Title>
                    <Card.Text> { props.task } </Card.Text>
                </Card.Body>
                <Button
                    style={{
                        width: 200
                    }}
                    onClick={() => {
                        alert(`you are missing the ${props.title} taks`)
                    }}
                    // onClick={alert('you are missing this task')}
                > this is a button</Button>
            </Card>
        </div>
    )
}

