import React from 'react'
import {Link} from 'react-router-dom'


function Data(props){

    return(
        
        
        <div>
             {/* <h3>Category: {props.data.fields.category}</h3>           */}
          <h4>Class: {props.data.fields.charClass}</h4>
            {/* <h4>Rarity: {props.data.fields.rarity}</h4> */}
            <h4>Name: {props.data.fields.name}</h4>
            {/* <h4>Slot: {props.data.fields.slot}</h4> */}
            {/* <h4>Season: {props.data.fields.season}</h4> */}
            <Link to = {`/gear/${props.data.fields.name}`}><img src={props.data.fields.icon} alt={props.data.fields.name} /></Link>
            {/* <img src={props.data.fields.image[0].thumbnails} alt="" /> */}
        </div>


    )
}

export default Data