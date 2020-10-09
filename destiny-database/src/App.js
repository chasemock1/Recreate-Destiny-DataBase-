import React, {useEffect, useState} from 'react';
import Data from './Data'
import axios from 'axios'
import './App.css';

function App() {
  const [gear, setGear] = useState([])
  const [fetchGear, setFetchGear] = useState(false)

  useEffect(()=>{
    const getData = async ()=>{
      const airtableURl = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/destiny`
      const response = await axios.get(airtableURl,{
        headers:{
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`
        }
      })
      // const gear = Object.keys(response.data.records)
      // console.log(gear)
      setGear(response.data.records)
      console.log(response.data.records)
    }
    getData()
  },[fetchGear])

  return (
    <div className="App">
      <h1>Destiny Database</h1>
      {gear.map((ger)=>(
        <Data data={ger} fetchGear={fetchGear} setFetchGear={setFetchGear}/>
      ))}
    </div>
  );
}

export default App;
