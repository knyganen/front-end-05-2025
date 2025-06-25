import React, { useRef } from 'react'
import esindusedJSON from "../../data/esindused.json";
import { useNavigate, useParams } from 'react-router-dom';

function MuudaEsindus() {
const {index} = useParams();
const leitud = esindusedJSON[index];
const esindusRef = useRef();
const telefonRef = useRef();
const aadressRef = useRef();
const navigate = useNavigate();

const muuda = () => {
  esindusedJSON[index] = {
  "keskus": esindusRef.current.value,
  "tel": telefonRef.current.value,
  "aadress": aadressRef.current.value

}

navigate("/halda-esindused");

}

  return (
    <div>
      <label>Esinduse keskus</label> <br />
      <input ref={esindusRef} defaultValue={leitud.keskus}  type="text" /> <br />
      <label>Esinduse telefon</label> <br />
      <input ref={telefonRef} defaultValue={leitud.telefon} type="text" /> <br />
      <label>Esinduse aadress</label> <br />
      <input ref={aadressRef} defaultValue={leitud.aadress} type="text" /> <br />
      <button onClick={muuda}>Sisesta</button> <br />
    </div>
  )
}


export default MuudaEsindus
