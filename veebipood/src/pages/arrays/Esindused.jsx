import { useState } from "react";
import esindusedFailist from "../../data/esindused.json"
import ArraysHome from "./ArraysHome";
import { Link } from "react-router-dom";
import { useRef } from "react";

function Esindused() {
  const [linn, setLinn] = useState ("Tallinn");
  const [esindused, setEsindused] =  useState(esindusedFailist.slice());
  const otsingRef = useRef();

  function arvutaKokku() {
    let summa = 0;
    esindused.forEach(esindus => summa = summa + esindus.keskus.length);
    return summa;

    }

    function otsi () {
      const vastus = esindusedFailist.filter(esindus => esindus.keskus.includes(otsingRef.current.value));
      setEsindused(vastus);
    
    }

  return (
    <div>
       <label>Otsi</label>
       <input ref={otsingRef} onChange={otsi}   type="text" />
      {/* <div>Hetkel aktiivne linn: {linn}</div> */}
      <button className={linn === "Tallinn" ? "aktiivne" : undefined} onClick={() => setLinn("Tallinn")}>Tallinn</button>
      <button className={linn === "Pärnu" ? "aktiivne" : undefined} onClick={() => setLinn("Pärnu")}>Pärnu</button>
      <button className={linn === "Tartu" ? "aktiivne" : undefined} onClick={() => setLinn("Tartu")}>Tartu</button>
      <button className={linn === "Narva" ? "aktiivne" : undefined} onClick={() => setLinn("Narva")}>Narva</button>
      
      
      <br /> <br />
      
      {linn === "Tallinn" && (
        <div>
         {esindused.map(esindus => 
         <div key={esindus.keskus}>
          <div>{esindus.keskus} </div>
          <div>{esindus.tel} </div>
          <div>{esindus.aadress} </div>
          <Link to={"/esindus/" + esindus.keskus} >
          <button>Vaata lähemalt</button>
          </Link>
          <br />
          </div>)}
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
      <br />
      <br />

      <div>Kõikide keskuste nimede tähemärgid kokku: {arvutaKokku()} tk </div>
    
    </div>
  )

}
export default Esindused