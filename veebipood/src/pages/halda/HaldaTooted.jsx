import { useState, useRef } from "react"
import tootedFailist from "../../data/tooted.json"
import { Link } from "react-router-dom"
import HaldaHome from "./HaldaHome";


function HaldaTooted() {
const [tooted, setTooted] = useState(tootedFailist.slice());
const ToodeRef = useRef();

const kustuta = (index) => {
  tootedFailist.splice(index, 1);
  setTooted(tootedFailist.slice());
}

const lisa = () => {
  tootedFailist.push(ToodeRef.current.value);
  setTooted(tootedFailist.slice());
  ToodeRef.current.value="";
}

  return (
    <div>
      <HaldaHome />
      <label>Toode</label> <br />
      <input ref={ToodeRef}  type="text" />
      <button onClick={lisa}>Sisesta</button>
      <table>
        <thead>
         <tr>
        <th>Index</th>
        <th>Toode</th>
        <th>Kustuta</th>
        </tr>
        </thead>
        <tbody>
        {tooted.map((toode, index) => 
          <tr key={toode}>
            <td>{index} </td>
            <td>{toode}</td> 
            <td><button onClick={() => kustuta(index)}>x</button></td>
            </tr>)}
        </tbody>
      </table>
     

    </div>
  )
}

export default HaldaTooted