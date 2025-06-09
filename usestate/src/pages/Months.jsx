import { useState } from 'react'

function Months() {
const [months, setMonths] = useState(["March", "Jan", "Feb", "Dec"]);

  return (
    <div>
        <button onClick={() => setMonths([])} >Tühjenda</button>
      <div>Aastas on {months.length} kuud</div>
      <br />

      {months.length === 0 && <div>Kuid pole</div> }  
      {months.map((months, index) => <div key={index}>{months}</div>)}
        
    <br /> <br />
    <div>Kuid kokku: {months.length} kuud</div>
    </div>
  )
}

export default Months