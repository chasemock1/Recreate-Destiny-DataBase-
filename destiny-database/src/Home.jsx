import React from 'react'
import './Home.css'

function Home(props){
    return(
        <div className="home-div">
        
            <h1>{props.data.fields.activity}</h1>
            <h2>{props.data.fields.location}</h2>
            <h2>{props.data.fields.loot}</h2>


        </div>
    )
}


export default Home