import { useState } from "react";
import JoogidFailist from "../joogid.json";

function HaldaJooke() {
    const [joogid, uuendaJoogid] = useState(JoogidFailist);
    

    function kustuta(index) {
      joogid.splice(index, 1);
      uuendaJoogid(joogid.slice());
    }


  return (
    <div>
        Joogid:
        {joogid.map((element, index) =>
        <div key={index} >
          <span>{element} </span>
          <button onClick={() => kustuta(index)}>x</button>
        </div>)}
        <br />
        
    </div>
  )
}

export default HaldaJooke