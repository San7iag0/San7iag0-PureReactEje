import React from 'react';
import CompProds from './compProds';
import productsData from './productsData';


export default function Prod(){
    const arrComp = productsData.map(ele => {
        return (
        <CompProds 
            key = {ele.id}
            price = {ele.price}
            name = {ele.name}
            description = {ele.description}
        />
        )
    })
    return(
        <div>
            {/* <CompProds 
                price = {productsData.price}
                name = {productsData.name}
                description = {productsData.description}
            /> */}
            {arrComp}
        </div>
    )
}
