import React from 'react'
import {Link} from 'react-router-dom'

function Header(){
return(
<div>
    <Link to='/'>Home</Link> 
    <Link to='/list-view' >List</Link>
    <Link to='/form' >Form</Link>

    <h2>SearchBar(placeHolder)</h2>

</div>
)
}

export default Header