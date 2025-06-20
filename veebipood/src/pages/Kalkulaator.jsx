import LaenuKalkulaator from "../components/LaenuKalkulaator"
import MaksimaalneKalkulaator from "../components/MaksimaalneKalkulaator";
import TavaKalkulaator from "../components/TavaKalkulaator"
import { useState } from "react";


function Kalkulaator() {

    const [vaade, setVaade] = useState("laenu");


  return (
<div>
    <button onClick={() => setVaade("tava")}>Tavakalkulaator</button>
    <button onClick={() => setVaade("laenu")}>Laenukalkulaator</button>
    <button onClick={() => setVaade("maksimaalne")}>Maksimaalne limiit</button>

    {vaade === "tava" && <TavaKalkulaator />}
    {vaade === "laenu" && <LaenuKalkulaator/> }
    {vaade === "maksimaalne" && <MaksimaalneKalkulaator/> }

</div>
    
    
  )
}

export default Kalkulaator