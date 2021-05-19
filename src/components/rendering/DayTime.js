import React from 'react';

export default function DayTime(){

    const date = new Date(1992, 6, 7, 5);
    const hours = date.getHours();
    let timeOfDay; 
    let styles = {
        fontSize: 50,
    }

    if(hours <= 12){
        timeOfDay = 'Morning'
        styles.color = '#00FF00'
    } else if (hours > 12 && hours <17){
        timeOfDay = 'afternoon'
        styles.color = '#00008B'    
    } else if (hours > 17){
        timeOfDay = 'night'
        styles.color = '#FF7F50'
    }

    return (
        <div>
            <h1 style={styles}> Good { timeOfDay } </h1>
        </div>
    )
}
