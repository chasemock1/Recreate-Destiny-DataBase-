import React from 'react'
import {useParams} from 'react-router-dom'

function GearPage(props){
    const params = useParams()

    const charGear = props.data.find((ger) => ger.name === params.name)
    console.log(props.data)
    console.log(charGear)
    return(
        <div>
            
            {/* <h3>Category: {props.gear.fields.name}</h3>          
            <h4>Class: {props.gear.fields.charClass}</h4>
            <h4>Rarity: {props.gear.fields.rarity}</h4>
            <h4>Name: {props.gear.fields.name}</h4>
            <h4>Slot: {props.gear.fields.slot}</h4>
            <h4>Season: {props.gear.fields.season}</h4>
            <img src={props.gear.fields.icon} alt="" /> */}
            

        </div>
    )
}


export default GearPage