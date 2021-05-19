import React from 'react';

export default function RendArray(){

    // render arrays to Li elemnets list 
    let arr = [
        'Yellow', 'Red', 'Black'
    ];

    const numberList = [1, 2, 3, 4, 5, 6, 7]

    const List = numberList.map((num) => 
        <li key={num.toString()}>{num}</li>
    )

    const Colors = arr.map((ele) => 
        <li> {ele} </li>
    )

    return (
        <div>
            { List }
            { Colors }
        </div>
    );
}

