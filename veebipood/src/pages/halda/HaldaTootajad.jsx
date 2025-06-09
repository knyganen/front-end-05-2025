import { Link } from 'react-router-dom'
import HaldaHome from './HaldaHome'
import tootajadFailist from "../../data/tootajad.json"
import { useState } from 'react';
import { useRef } from 'react';

function HaldaTootajad() {

const [tootajad, setTootajad] = useState(tootajadFailist.slice());
const tootajaRef = useRef();

const kustuta = (index) => {
tootajadFailist.splice(index, 1);
setTootajad(tootajadFailist.slice());
}


const lisa = () => {
  tootajadFailist.push(tootajaRef.current.value);
  setTootajad(tootajadFailist.slice());
  tootajaRef.current.value = "";
}

  return (
    <div>
      <HaldaHome />
      <label>Tootaja</label> <br />
      <input ref={tootajaRef}  type="text" /> <br />
      <button onClick={lisa}>Sisesta</button> <br />
      <table>
        <thead>
          <tr>
            <th>Index</th>
            <th>Töötaja</th>
            <th>Kustuta</th>
          </tr>
        </thead>
        <tbody>
          {tootajad.map((tootaja, index) => 
          <tr key={tootaja}>
            <td>{index} </td>
            <td>{tootaja}</td> 
            <td><button onClick={() => kustuta(index)}>x</button></td>
            </tr>)}
        </tbody>
      </table>
    </div>
  )

}

export default HaldaTootajad