import { useRef } from 'react';
import './App.css'
import { useState } from 'react';

function App() {
  const [laenusumma, setLaenusumma] = useState(75000);
  const [intress, setIntress] = useState(4.44);
  const ostuhindRef = useRef();
  const sisseMakseRef = useRef();
  const marginaalRef = useRef();
  const euriborRef = useRef();
  const [kuumakse, setKuumakse] = useState();
  const perioodRef = useRef();

  const arvutaLaenusumma = () => {
    setLaenusumma(ostuhindRef.current.value - sisseMakseRef.current.value);
    arvutaKuumakse();
  }
  const arvutaIntress = () => {
    setIntress(Number(marginaalRef.current.value) + Number(euriborRef.current.value));
    arvutaKuumakse();

  }

  const arvutaKuumakse = () => {
    setKuumakse(
      (ostuhindRef.current.value - sisseMakseRef.current.value) /
      (perioodRef.current.value * 12) *
      (Number(marginaalRef.current.value) + Number(euriborRef.current.value) )
    );
  }

  return (
    <>
    <label>Kinnisvara ostuhind</label>
    <input defaultValue={75000} onChange={arvutaLaenusumma}  ref={ostuhindRef}  type="number" /> <br />
    <label>Sissemakse</label>
    <input defaultValue={0}  onChange={arvutaLaenusumma} ref={sisseMakseRef}  type="number" /> <br />
    <div>Laenusumma: {laenusumma} </div>
    <label>Periood</label> <br />
    <input defaultValue={30} onChange={arvutaKuumakse} type="number" /> <br />
    <label>Marginaal</label>
    <input defaultValue={1.7} onChange={arvutaIntress} ref={marginaalRef}  type="number" /> <br />
    <label>Euribor</label>
    <input defaultValue={2.74} onChange={arvutaIntress} ref={euriborRef}  type="number" /> <br />
    <div>Intress kokku: {intress.toFixed(2)} </div>
    <br /><br />
    <div>Kuumakse: {kuumakse} €</div>
    </>
  )
}

export default App
