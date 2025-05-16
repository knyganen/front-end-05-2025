import { useState } from "react";

function Esindused() {
  const [linn, setLinn] = useState ("Tallinn");

  return (
    <div>
      <div>Hetkel aktiivne linn: {linn}</div>
      <button onClick={() => setLinn("Tallinn")}>Tallinn</button>
      <button onClick={() => setLinn("Pärnu")}>Pärnu</button>
      <button onClick={() => setLinn("Tartu")}>Tartu</button>
      <button onClick={() => setLinn("Narva")}>Narva</button>
      
      <br /> <br />
      
      {linn === "Tallinn" && (
        <div>
          <p>Ülemiste</p>
          <p>Rocca al Mare</p>
          <p>Magistrali</p>
          <p>Vesse</p>
          <p>Kristiine</p>
          <p>Järveotsa</p>
        </div>

      )}

      {linn === "Tartu" && (
        <div>
          <p>Raatuse</p>
          <p>Lõunakeskus</p>
        </div>
      )}

      {linn === "Pärnu" &&<p>Port Artur 2</p>}
      {linn === "Narva" &&<p>Fama</p>}
    
    </div>
  )

}
export default Esindused