import { useRef, useState } from "react"

// Reacti HOOK
// 1. useState
// - koosneb muutujat ja selle muutuja muutjast ning sulgude sees algväärtusest
// - HTMLs sisu muutmiseks
// - muutuja läheb HTMLi
// - muutja läheb onClickiga käima

// 2. useRef
// - a) pean ta looma
//   b) pean HTMLi inputiga siduma
//   c) pean tema seest väärtuse .current.value abil kätte saama
// - HTMLi inputi seest kirjutatu kätte saamiseks

function Lisatoode() {
  const [sonum, setSonum] = useState(""); // useState - HTML-s sisu muutmiseks
  const nimiRef = useRef(); //useRef - HTMLi inputi seest kirjutatu kätte saamiseks

  function lisa() {
    if (nimiRef.current.value === "") {
      setSonum("Ei saa tühja nimega lisada!");
      return; // lõpetab funktsiooni
    } 

    if (nimiRef.current.value.length < 4 ) {
      setSonum("Peab olema vähemalt 4 tähemärki!");
      return; 
    } 

      setSonum("Toode lisatud!");
    
  }

  return (
    <div>
      <p>{sonum}</p>
      <label>Toote nimi</label> <br />
      <input ref={nimiRef}  type="text" /> <br />
      <button onClick={lisa}>Sisesta</button> <br />
     
    </div>
  )
}

export default Lisatoode