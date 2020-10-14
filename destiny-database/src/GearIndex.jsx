import React, {useEffect, useState} from 'react'
import Data from './Data'

function GearIndex(props){
    const [category, setCategory]=useState('all')
    //invoke useEffect
    //inside use effect reduce props.gear
    //reduced output will be arrays of gear by category
    //if categoy is all map gear as is
    //if category is hunter, warlock, titan then map the appropiate array
    //
    console.log(props.gear)
    useEffect(() => {
        const groupBy = (array, key) =>{
            return array.reduce((result, currentValue)=>{
                (result[currentValue[key]] = result[currentValue[key]] || []).push(
                    currentValue
                  );
                  return result
            }, {})
        }
        console.log(groupBy(props.gear, 'charClass'))
    }, [])
    return(
<div>
    <button>Hunter</button>
        {props.gear.map((ger)=>(
          <Data data={ger} />
          
          ))}
</div>
    )
}

export default GearIndex