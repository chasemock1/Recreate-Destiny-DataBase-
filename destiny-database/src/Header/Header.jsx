import React from 'react'
import {Link} from 'react-router-dom'
import './Header.css'

function Header(){
return(
<div className= "nav-bar" >
    <a href="https://www.bungie.net" target= "_blank" rel="noopener noreferrer"><img className="bungie-link"src="https://i.imgur.com/05Op74v.jpg" alt=""/></a>
    <Link className="link" to='/'>Home</Link> 
    <Link className="link" to='/list-view' >List</Link>
    <Link className="link" to='/form' >Form</Link>
    {/* <Link to='/hunter' >Hunter</Link> */}


</div>
)
}

export default Header