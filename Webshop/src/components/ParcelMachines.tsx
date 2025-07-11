import { useEffect, useState } from "react";
import { ParcelMachine } from "../models/ParcelMachine";


function ParcelMachines() {
    const [parcelMachines, setParcelMachines] = useState<ParcelMachine[]>([]);

    useEffect(() => {
        fetch("https://www.omniva.ee/locations.json")
        .then(res => res.json())  
        .then(json => setParcelMachines(json))

    }, []);

  return (
    <div>
        <select>
        {parcelMachines
        .filter(pm => pm.A0_NAME === "EE")
        .map(pm => <option key={pm.NAME}>{pm.NAME} </option>)}
            </select> 
            </div>
   
  )
}

export default ParcelMachines