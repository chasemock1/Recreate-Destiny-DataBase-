import React from 'react'
import {useParams} from 'react-router-dom'

function GearPage(props){
    const params = useParams()

    const gears = props.data.fields.find((ger) => ger.name === params.name)
    console.log(props.data.fields)
    console.log(gears)
    return(
        <div>
            
            <h3>Category: {gears.name}</h3>          
            <h4>Class: {props.data.fields.charClass}</h4>
            <h4>Rarity: {props.data.fields.rarity}</h4>
            <h4>Name: {props.data.fields.name}</h4>
            <h4>Slot: {props.data.fields.slot}</h4>
            <h4>Season: {props.data.fields.season}</h4>
            <img src={props.data.fields.icon} alt="" />
            

        </div>
    )
}


export default GearPage