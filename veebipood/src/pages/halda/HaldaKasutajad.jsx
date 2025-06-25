import React, { useState, useRef } from 'react'
import HaldaHome from './HaldaHome'
import kasutajadFailist from "../../data/kasutajad.json"
import { Link } from 'react-router-dom'

function HaldaKasutajad() {

  const [kasutajad, setKasutajad] = useState(kasutajadFailist.slice());
  const emailRef = useRef();
  const nimiRef = useRef();

  const lisa = () => {
    kasutajadFailist.push({
      "email": emailRef.current.value,
      "nimi": nimiRef.current.value
    });
  
    setKasutajad(kasutajadFailist.slice());
    emailRef.current.value = "";
    nimiRef.current.value = "";
  }
  
  const kustuta = (index) => {
    kasutajadFailist.splice(index, 1);
    setKasutajad(kasutajadFailist.slice());
  }

  
  return (
    <div>
      <HaldaHome />
      <label>Email</label> <br />
      <input ref={emailRef} type="text" /> <br />
      <label>Nimi</label> <br />
      <input ref={nimiRef} type="text" /> <br />
      <button onClick={lisa}>Lisa</button>
      <table>
        <thead>
          <tr>
            <th>Index</th>
            <th>Kasutaja nimi</th>
            <th>Kasutaja e-mail</th>
            <th>Kustuta</th>
          </tr>
        </thead>
        <tbody>
          {kasutajad.map((kasutaja, index) => 
            <tr key= {index}>
              <td>{index} </td>
            <td>{kasutaja.nimi}</td>
            <td>{kasutaja.email}</td>
            <td>
              <button onClick={() => kustuta(index)}>x</button>
      <Link to={"/muuda-kasutajad/" + index}>
        <button>Muuda</button>
      </Link>
    </td>
          </tr>
          
          )}
        </tbody>
      </table>
    </div>
  )
}

export default HaldaKasutajad
