import { useNavigate, useParams, Link } from "react-router-dom";
import tootajadFailist from "../../data/tootajad.json"
import { useRef } from "react";

function MuudaTootaja() {
  const {index} = useParams();
const leitud = tootajadFailist[index];
const eesnimiRef = useRef();
const ametikohtRef = useRef();
const vanusRef = useRef();
const navigate = useNavigate();

const muuda = () => {
  tootajadFailist[index] = {
  "eesnimi": eesnimiRef.current.value,
  "ametikoht": ametikohtRef.current.value,
  "vanus": vanusRef.current.value

};

navigate("/halda-tootajad");

};


  return (
    <div>
      <label>Eesnimi</label> <br />
      <input ref={eesnimiRef}  type="text" defaultValue={leitud.eesnimi} /> <br />
      <label>Ametikoht</label> <br />
      <input ref={ametikohtRef}  type="text" defaultValue={leitud.ametikoht} /> <br />
      <label>Vanus</label> <br />
      <input ref={vanusRef}  type="text" defaultValue={leitud.vanus}/> <br />
      <button onClick={muuda}>Sisesta</button> <br />
      <Link to={"/muuda-tootaja/" + index} >
              <button>Muuda</button>
              </Link>
    </div>
  );
}


export default MuudaTootaja