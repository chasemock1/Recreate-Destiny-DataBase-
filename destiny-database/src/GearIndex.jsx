import React, { useState } from "react";
import Data from "./Data/Data";

function GearIndex(props) {
  const [category, setCategory] = useState("all");
  console.log(category)
  let i = 1
  return (
    <div>

    <div>
      <button onClick={() => setCategory('Hunter')}>Hunter</button>
      <button onClick={() => setCategory('Titan')}>Titan</button>
      <button onClick={() => setCategory('Warlock')}>Warlock</button>
      <button onClick={() => setCategory('all')}>All Gear</button>

    </div>
    <div>
        {}
      {props.gearByType.Hunter && props.gearByType[category].map((ger) => (
        <Data data={ger} key={i++} />
      ))}
        
    </div>
    </div>
  );
}

export default GearIndex;
