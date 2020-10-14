import React from 'react'
import {Link} from 'react-router-dom'
import './Header.css'

function Header(){
return(
<div className= "nav-bar">
    <Link className="link" to='/'>Home</Link> 
    <Link className="link" to='/list-view' >List</Link>
    <Link className="link" to='/form' >Form</Link>
    {/* <Link to='/hunter' >Hunter</Link> */}


</div>
)
}

export default Header