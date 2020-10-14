import React, {useState} from 'react'
import axios from 'axios' 
import './Form.css'

function Form(){
const [category, setCategory] = useState('')
const [charClass, setCharClass] = useState('')
const [rarity, setRarity] = useState('')
const [name, setName] = useState('')
const [slot, setSlot] = useState('')
const [season, setSeason] = useState('')
const [icon, setIcon] = useState('')

const handleSubmit = async (e)=>{
    e.preventDefault()
    const fields = {
        category,
        charClass,
        rarity,
        name,
        slot,
        season,
        icon
    }
    const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/destiny`

        await axios.post(airtableURL, { fields }, {
            headers:{
                Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`
            }
        }
    )
   
}







    return(
        <div>
            <h1>Did I miss something?</h1>
            <h2>Insert the info and I will update the rest.</h2>
            <form onSubmit={handleSubmit}>
           
           <label htmlFor="category">Category</label>
           <input name = 'category' type="text" value={category} onChange={(event)=> setCategory(event.target.value)}/>
           
           <label htmlFor="charClass">Class of character</label>
           <input name="class" type="text" value={charClass} onChange={(event)=> setCharClass(event.target.value)}/>
           
           <label htmlFor="rarity">Rarity</label>
           <input name = "rarity" type="text" value={rarity} onChange={(event)=> setRarity(event.target.value)}/>
           
           <label htmlFor="name">Name</label>
           <input name = "name" type="text" value={name} onChange={(event)=> setName(event.target.value)}/>
           
           <label htmlFor="slot">Slot</label>
           <input name = "slot" type="text" value={slot} onChange={(event)=> setSlot(event.target.value)}/>

           <label htmlFor="season">Season</label>
           <input name = "season" type="text" value={season} onChange={(event)=> setSeason(event.target.value)}/>

           <label htmlFor="icon">Image</label>
           <input name = "icon" type="text" value={icon} onChange={(event)=> setIcon(event.target.value)}/>

           <button type = "submit">2 Tokens and a Blue</button>
       </form>
        </div>
    )
}

export default Form