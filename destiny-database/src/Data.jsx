import React from 'react'
import {Link} from 'react-router-dom'
import './Data.css'

function Data(props){
console.log(props.data)
    return(
        
        
        <div className = 'service-list'>
          <h4>Class: {props.data.fields.charClass}</h4>
            <h4>Name: {props.data.fields.name}</h4>
            <Link to = {`/gear/${props.data.id}`}><img src={props.data.fields.icon} alt={props.data.fields.name} /></Link>
        </div>


    )
}

export default Data