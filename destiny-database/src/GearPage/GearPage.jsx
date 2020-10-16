import React from 'react'
import {useParams} from 'react-router-dom'
import './GearPage.css'

function GearPage(props){
    const params = useParams()

    const charGear = props.gear.find((ger) => ger.id === params.id)
if(!charGear){
    return <h4>loading...</h4>
}
    return(
        <div className= 'detailed-con'>
            
            <img className='icon' src={charGear.fields.icon} alt="" />  
             <h3 className='detailed-text'>Category: {charGear.fields.name}</h3>          
            <h4 className='detailed-text'>Class: {charGear.fields.charClass}</h4>
            <h4 className='detailed-text'>Rarity: {charGear.fields.rarity}</h4>
            <h4 className='detailed-text'>Name: {charGear.fields.name}</h4>
            <h4 className='detailed-text'>Slot: {charGear.fields.slot}</h4>
            <h4 className='detailed-text'>Season: {charGear.fields.season}</h4>
            

        </div>
    )
}


export default GearPage