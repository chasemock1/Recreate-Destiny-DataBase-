import React, {useEffect, useState} from 'react';
import Data from './Data'
import Header from './Header/Header'
import Home from './Home'
import axios from 'axios'
import { Route} from 'react-router-dom'
import './App.css';
import Form from './Form/Form';
import GearPage from './GearPage';
import GearIndex from './GearIndex'

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
      // console.log(gear)

      setGear(response.data.records)

       
      // console.log(response.data.records)
    }
    getData()

  },[])

//   console.log(fetchGear)
  
//   let filteredData = gear.filter(ger => {
//     return ger.class.includes('Hunter')
// })
// console.log(filteredData)
// console.log(fillData)
// console.log(gear)
  return (
    <div className="App">
      <h1>Destiny Database</h1>

      <Header/>
    
        <Route exact path = '/'>
          <Home/>
        </Route>

        
      <Route exact path = '/list-view'>
        <GearIndex gear={gear}/>
        
      </Route>

      <Route exact path = '/form'>
        <Form/>
      </Route>

      <Route exact path = '/gear/:name'>
          <GearPage data = {gear}/>
      </Route>

      
      

    </div>
  );
}

export default App;
