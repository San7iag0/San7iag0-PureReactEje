import React from 'react';

export default function ObjArrays(){

    let us = [
        {
          name: 'santi', 
          age: '28',
          hobbies: 'Mess arrown'
        },
        {
          name: 'keeper',
          age: 18,
          hobbies: 'roam, be idle'
        }
    ]
    
    const People = us.map((ele, idx) => {
        return(
            <div>
                <li key={idx}> { ele.name }</li>
                <li key={idx}> {ele.age} </li>
                <li key={idx}> {ele.hobbies} </li>
            </div>
        )
    })
    return(
        <div>
            <ul>
                { People }
            </ul>
        </div>
        
    )
}

