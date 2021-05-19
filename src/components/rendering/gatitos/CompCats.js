import React from 'react';


export default function CompCats(props){

    return (
        <div>
            <h3> Hola Amiguito, { props.name } </h3>           
            <img src= {props.imgUrl} alt='gatito image'/>
            <p> Email: { props.email } </p>

            <p> Colors: {props.colors.join('!, ')} </p>
        </div>
    )   
}

  