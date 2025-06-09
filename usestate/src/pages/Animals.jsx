import { useState } from 'react'

function Animals() {
    const [animals, setAnimals] = useState (["pigs", "goats", "sheep"]);

  return (
   

<div>
        <button onClick={() => setAnimals([])} >Tühjenda</button>
      <div>Laudas on {animals.length} looma</div>
      <br />

      {animals.length === 0 && <div>Loomi pole</div> }  
      {animals.map((animals, index) => <div key={index}>{animals}</div>)}
      
        
    <br /> <br />
    <div>Laudas kokku: {animals.length} looma</div>
    </div>

   
  )
}

export default Animals