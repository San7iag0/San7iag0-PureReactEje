import React from 'react'
import todoList from './todoList'
import ToDoComp from './ToDoComp'

export default function ToDo(){
    const zzz = todoList.map(ele => {
        return (
            <ToDoComp 
                key={ele.id}
                Priority = {ele.Priority}
                title = {ele.title}
                task = {ele.task}
            />       
        )}
    );

    return(
        <>
            {zzz}
        </>
    )
}
