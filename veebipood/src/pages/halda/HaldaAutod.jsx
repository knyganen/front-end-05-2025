import { Link } from 'react-router-dom'
import HaldaHome from './HaldaHome'
import autodFailist from "../../data/autod.json"
import { useState } from 'react';
import { useRef } from 'react';

function HaldaAutod() {

const [autod, setAutod] = useState(autodFailist.slice());
const autoRef = useRef();
const hindRef = useRef();
const piltRef = useRef();
const aktiivneRef = useRef();

const kustuta = (index) => {
autodFailist.splice(index, 1);
setAutod(autodFailist.slice());
}


const lisa = () => {
  autodFailist.push( {
  "nimi": autoRef.current.value,
  "hind": hindRef.current.value,
  "aktiivne": aktiivneRef.current.checked,
  "pilt": piltRef.current.value,

});

  setAutod(autodFailist.slice());
  autoRef.current.value = "";
  hindRef.current.value = "";
  aktiivneRef.current.checked= false;
  piltRef.current.value = "";

}
  return (
    <div>
      <HaldaHome />
      <label>Auto nimi</label> <br />
      <input ref={autoRef}  type="text" /> <br />
      <label>Auto hind</label> <br />
      <input ref={hindRef}  type="text" /> <br />
      <label>Auto pilt</label> <br />
      <input ref={piltRef}  type="text" /> <br />
      <label>Auto aktiivsus</label> <br />
      <input ref={aktiivneRef}  type="checkbox" /> <br />
      <button onClick={lisa} >Sisesta</button> <br />
      <table>
        <thead>
          <tr>
            <th>Index</th>
            <th>Auto nimi</th>
            <th>Auto hind</th>
            <th>Auto aktiivsus</th>
            <th>Auto pilt</th>
            <th>Muuda</th>
            <th>Kustuta</th>
          </tr>
        </thead>
        <tbody>
          {autod.map((auto, index) => 
          <tr key={auto.nimi} className={auto.aktiivne ? "aktiivne-auto" : "mitteaktiivne-auto" }>
            <td>{index} </td>
            <td>{auto.nimi}</td> 
            <td>{auto.hind}</td> 
            <td><img className="pilt" src={auto.pilt} alt="" /></td> 
            <td><button onClick={() => kustuta(index)}>x</button></td>
            <td>
              <Link to={"/muuda-auto/" + index} >
              <button>Muuda</button>
              </Link>
            </td>
            </tr>)}
        </tbody>
      </table>
    </div>
  )
}

export default HaldaAutod
    
   
  


