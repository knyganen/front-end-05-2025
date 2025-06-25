import HaldaHome from "./HaldaHome"
import hinnadFailist from "../../data/hinnad.json";
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom'

function HaldaHinnad() {
const [hinnad, setHinnad] = useState(hinnadFailist.slice());
const hindRef = useRef();
const sonanaRef = useRef();

const kustuta = (index) => {
hinnadFailist.splice(index, 1);
setHinnad(hinnadFailist.slice());
}

const lisa = () => {
  hinnadFailist.push({
    number: hindRef.current.value,
    sonana: sonanaRef.current.value
  });


  setHinnad(hinnadFailist.slice());
  hindRef.current.value = "";
  sonanaRef.current.value = ""

}

  return (
    <div>
      <HaldaHome />
      <label>Hind (number)</label> <br />
        <input ref={hindRef}  type="text" /> <br />
        <label>Hind (sõnana)</label> <br />
        <input ref={sonanaRef}  type="text" /> <br />
        <button onClick={lisa}>Lisa</button> <br />
        <br /><br />
      <table>
        <thead>
          <tr>
            <th>Index</th>
            <th>Hind (number)</th>
            <th>Hind (sõnana)</th>
            <th>Kustuta</th>
          </tr>
        </thead>
        <tbody>
  {hinnad.map((hind, index) => 
    <tr key={index}>
    <td>{index}</td>
    <td>{hind.number}</td> 
    <td>{hind.sonana}</td> 
    <td>
      <button onClick={() => kustuta(index)}>x</button>
    </td>
    <td>
      <Link to={"/muuda-hind/" + index}>
        <button>Muuda</button>
      </Link>
    </td>
  </tr>
  
  )}
</tbody>
      </table>
    </div>
  )
}

export default HaldaHinnad