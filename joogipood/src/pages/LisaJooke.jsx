import { useRef } from "react";
import JoogidFailist from "../joogid.json";
import React from 'react';

function LisaJooke() {
  const jookRef = useRef();

  function lisaUusJook() {
    JoogidFailist.push(jookRef.current.value);
    
  }

  return (
    

    <div>
    <label>Lisa uus jook: </label> <br />
    <input ref={jookRef} type="text" /> <br />
    <button onClick={() => lisaUusJook()}>Sisesta</button>

    </div>
  )
}

export default LisaJooke