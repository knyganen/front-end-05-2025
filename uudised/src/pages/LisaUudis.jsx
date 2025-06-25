import { useRef, useState } from "react"

function LisaUudis() {
const uudiseRef = useRef();
const [sonum, uuendaSonum] = useState("")

const lisaUusUudis = () => {
    const uudised = JSON.parse(localStorage.getItem("uudised")) || [];
    uudised.push(uudiseRef.current.value);
    localStorage.setItem("uudised", JSON.stringify(uudised));

}

const kontrolli = () => {
  uuendaSonum("");

  if (uudiseRef.current.value.charAt(0) === uudiseRef.current.value.charAt(0).toLowerCase()) {
    uuendaSonum("Sisestasid uudise väikese tähega, palun paranda! 🤔");
 
  }

  if (uudiseRef.current.value.includes("  ")) {
    uuendaSonum("Sisestasid kaks tühikut, palun paranda!👌🏻 ")

  }
  
}

  return (
    <div>
      <div>{sonum} </div>
        <label>Uudise nimi</label> <br />
        <input onChange={kontrolli} ref={uudiseRef}  type="text" /> <br />
        <button onClick={lisaUusUudis} >Lisa uudis</button>
    </div>
  );
}

export default LisaUudis