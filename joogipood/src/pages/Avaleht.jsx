import { useState } from 'react';
import joogidFailist from "../joogid.json";

function Avaleht() {
const [joogid, uuendaJoogid] = useState(joogidFailist);

  return (
    <div>Joogid:
        {joogid.map((element, index) =>
        <div key={index} >
            <span>{element}</span>
        </div>)}
    </div>)
}

export default Avaleht