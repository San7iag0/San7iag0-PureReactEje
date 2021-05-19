import React from 'react'
import './gatitos.css'
import CompCats from './CompCats'

export default function Gatitos() {

    return (
        <div>            
            <CompCats
                name ='Mr Whiskerson'
                imgUrl= 'https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/kraken_generic_max_width_360/public/Que_debes_saber_antes_de_adoptar_un_gatito.jpg?itok=5_yubDf3'            
                email= 'email.com'
             
                colors = {['Black', 'red', 'Yellow']}      
            />
            <CompCats
                name ='pancho'
                imgUrl= ''            
                email= 'pancho.com'
             
                colors = {['white', 'black', 'brawn']}      
            />
        </div>
    )
}
