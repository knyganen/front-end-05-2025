import { useState, useRef } from "react";
import andjateFail from "../data/nimed.json";



function TagasisideAndjad() {
const [andjad, setAndjad] = useState(andjateFail.slice());
const AndjadRef = useRef();

function filtreeriMAlgavad() {
    const vastus = andjad.filter(andja => andja.startsWith("M"));
    setAndjad(vastus);
    }

    function filtreeri6Tähelised() {
        const vastus = andjateFail.filter(andja => andja.length === 6);
        setAndjad(vastus);
      }
      function filtreeriLopugaY() {
        const vastus = andjateFail.filter(andja => andja.endsWith("y"));
        setAndjad(vastus);
      }

      function sorteeriZA() {
        andjad.sort((a, b) => b.localeCompare(a));
        setAndjad(andjad.slice());
      }

      function kustuta(index) {
        const updated = andjad.slice();
        updated.splice(index, 1);
        setAndjad(updated);
      }

      const lisa = () => {
        andjateFail.push(AndjadRef.current.value);
        setAndjad(andjateFail.slice());
        AndjadRef.current.value="";
      }

      function muudaEst() {
        const uued = andjad.map(andja =>
        andja.startsWith("EST-") ? andja : "EST-" + andja);
        setAndjad(uued);
      }
      

  return (
    <div>   
        <button onClick={sorteeriZA} >Sorteeri Z-A</button> 
        <br /><br />
        <button onClick={filtreeriMAlgavad}>Jäta alles M-ga algavad </button>
        <button onClick={filtreeri6Tähelised}>Jäta alles täpselt 6 tähelised</button>
        <button onClick={filtreeriLopugaY}>Jäta alles Y-ga lõppevad</button>
        <br /><br />
        <button onClick={muudaEst}>Lisa EST- iga nime ette</button>
        <button onClick={() => setAndjad ([])} >Tühjenda</button>
        <br /><br />
        <label>Tagasiside andjad</label> <br />
      <input ref={AndjadRef}  type="text" /> <br />
      <button onClick={lisa}>Sisesta</button>
      <table>
        <tbody>
        {andjad.map((andja, index) => 
          <tr key={andja}>
            <td>{index} </td>
            <td>{andja}</td> 
            <td><button onClick={() => kustuta(index)}>x</button></td>
            </tr>)}
        </tbody>
      </table>
           
    </div>
  )

}
export default TagasisideAndjad