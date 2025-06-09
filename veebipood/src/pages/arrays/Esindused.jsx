import { useState } from "react";
import esindusedFailist from "../../data/esindused.json"
import ArraysHome from "./ArraysHome";

function Esindused() {
  const [linn, setLinn] = useState ("Tallinn");
  const esindused = esindusedFailist.slice();

  return (
    <div>
      {/* <div>Hetkel aktiivne linn: {linn}</div> */}
      <button className={linn === "Tallinn" ? "aktiivne" : undefined} onClick={() => setLinn("Tallinn")}>Tallinn</button>
      <button className={linn === "Pärnu" ? "aktiivne" : undefined} onClick={() => setLinn("Pärnu")}>Pärnu</button>
      <button className={linn === "Tartu" ? "aktiivne" : undefined} onClick={() => setLinn("Tartu")}>Tartu</button>
      <button className={linn === "Narva" ? "aktiivne" : undefined} onClick={() => setLinn("Narva")}>Narva</button>
      
      
      <br /> <br />
      
      {linn === "Tallinn" && (
        <div>
         {esindused.map(esindus => <p key={esindus}>{esindus}</p>)}
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