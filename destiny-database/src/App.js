import React, {useEffect, useState} from 'react';
import Data from './Data'
import Header from './Header'
import Home from './Home'
import axios from 'axios'
import { Route, Link} from 'react-router-dom'
import './App.css';
import Form from './Form';
import GearPage from './GearPage';

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

  },[fetchGear])

//   console.log(fetchGear)
  // const fillData = this.data.fields
//   let filteredData = fillData.filter(function(gear){
//     return gear.class === "Hunter"
// })
// console.log(fillData)

  return (
    <div className="App">
      <h1>Destiny Database</h1>

      <Header/>

        <Route exact path = '/'>
          <Home/>
        </Route>

        
      <Route exact path = '/list-view'>
        {/* {gear.map((ger)=>(
           <Data data={ger} fetchGear={fetchGear} setFetchGear={setFetchGear}/>
           <Link to = {`/gear/${props.data.fields.name}`}><img src={props.data.fields.icon} alt="" /></Link>

        ))} */}
      </Route>

      <Route exact path = '/form'>
          <Form/>
        </Route>

          <Route exact path = '/gear/name'>
            <GearPage data = {gear}/>
          </Route>

    </div>
  );
}

export default App;
