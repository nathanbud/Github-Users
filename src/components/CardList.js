import React from 'react'
import Card from './Card'

function CardList (props){
   
    return(
        <div>
               {props.data.map(profile => <Card {...profile} />) }
        </div>
    )
}

export default CardList