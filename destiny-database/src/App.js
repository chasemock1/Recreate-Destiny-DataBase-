import React, {useEffect, useState} from 'react';
import Header from './Header/Header'
import Home from './Home'
import axios from 'axios'
import { Route} from 'react-router-dom'
import './App.css';
import Form from './Form/Form';
import GearPage from './GearPage/GearPage';
import GearIndex from './GearIndex'

function App() {
  const [gear, setGear] = useState([])
  const [gearByType, setGearByType] = useState({})
  const [act, setAct] = useState([])

  useEffect(()=>{
    const getData = async ()=>{
      const airtableURl = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/destiny`
      const response = await axios.get(airtableURl,{
        headers:{
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`
        }
      })

      const {records}= response.data
      const groupBy = records.reduce(
        (acc, curr) => {
          acc[curr.fields.charClass].push(curr);
          acc.all.push(curr)
          return acc;
        },
        {
          'Hunter': [],
          'Titan': [],
          'Warlock': [],
          'all':[]
        }
      );
        setGearByType(groupBy)
      setGear(response.data.records)
      
       
    }
    getData()

  },[])

  useEffect(()=>{
    const getAct = async () =>{
      const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE2}/activities`
      const response = await axios.get(airtableURL, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`
        }
      })
      setAct(response.data.records)
      console.log(response.data.records)
    }
    getAct()
  },[])


  return (
    <div className="App">
      <h1>Destiny Database</h1>

      <Header/>
    
        <Route exact path = '/'>
          <h1>Activities</h1>
          {act.map((a) =>(
            <Home data={a}/>

          ))}
        </Route>

        
      <Route exact path = '/list-view'>
        <GearIndex gearByType = {gearByType}/>
        
      </Route>

      <Route exact path = '/form'>
        <Form/>
      </Route>

      <Route exact path = '/gear/:id'>
          <GearPage gear = {gear}/>
      </Route>

      
      

    </div>
  );
}

export default App;
