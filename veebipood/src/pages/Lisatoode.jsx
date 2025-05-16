import { useState } from "react"

function Lisatoode() {
  const [sonum, setSonum] = useState("");

  return (
    <div>
      <p>{sonum}</p>
      <label>Toote nimi</label> <br />
      <input type="text" /> <br />
      <button onClick={() => setSonum("Toode lisatud")}>Sisesta</button> <br />
     
    </div>
  )
}

export default Lisatoode