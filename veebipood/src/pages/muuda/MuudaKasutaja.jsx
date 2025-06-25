import { useNavigate, useParams, Link } from "react-router-dom";
import kasutajadJSON from "../../data/kasutajad.json"
import { useRef } from "react"


function MuudaKasutaja() {
  const {index} = useParams();
const leitud = kasutajadJSON[index];
const emailRef = useRef();
const nimiRef = useRef();
const navigate = useNavigate();

const muuda = () => {
  kasutajadJSON[index] = {
  "email": emailRef.current.value,
  "nimi": nimiRef.current.value,

}

navigate("/halda-kasutajad");

}

  return (
    <div>
      <label>Email</label> <br />
      <input ref={emailRef} type="text" defaultValue={leitud.email} /> <br />
      <label>Nimi</label> <br />
      <input ref={nimiRef} type="text" defaultValue={leitud.nimi}/> <br />
      <button onClick={muuda}>Lisa</button>
      <Link to={"/muuda-kasutaja/" + index} >
              <button>Muuda</button>
              </Link>
    </div>
  )
}

export default MuudaKasutaja