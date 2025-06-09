import React from 'react'
import HaldaHome from './HaldaHome'
import esindusedJSON from "../../data/esindused.json";
import { useState } from 'react';
import { useRef } from 'react';

function HaldaEsindused() {
const [esindused, setEsindused] = useState(esindusedJSON.slice());
const esindusRef = useRef();

const lisa = () => {
  esindusedJSON.push(esindusRef.current.value) //faili lisamine, refi väärtus (inputi sisse kirjutamine)
  setEsindused(esindusedJSON.slice()); //html-i uuendamine
  esindusRef.current.value = ""; //kui lisad uue esinduse, siis viskab pärast seda inputi tyhjaks
}

const kustuta = (index) => {
  esindused.splice(index, 1);
  setEsindused(esindused.slice());

}

  return (
    <div>
      <HaldaHome />
      <label>Esindus</label> <br />
      <input ref={esindusRef}  type="text" /> <br />
      <button onClick={lisa}>Sisesta</button> <br />
      <table>
        <thead>
          <tr>
            <th>Index</th>
            <th>Esindus</th>
            <th>Kustuta</th>
          </tr>
        </thead>
        <tbody>
          {esindused.map((esindus, index) => 
          <tr key={esindus}>
            <td>{index} </td>
            <td>{esindus}</td> 
            <td><button onClick={() => kustuta(index)}>x</button></td>
            </tr>)}
        </tbody>
      </table>
    </div>
  )
}

export default HaldaEsindused