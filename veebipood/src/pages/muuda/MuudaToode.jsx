
import { useNavigate, useParams, Link } from 'react-router-dom';
import tootedFailist from "../../data/tooted.json"
import { useRef } from "react"

function MuudaToode() {
  const {index} = useParams();
  console.log("INDEX:", index); 
  const leitud = tootedFailist[index]; 
  const toodeRef = useRef();
  const hindRef = useRef();
  const piltRef = useRef();
  const aktiivneRef = useRef();
  const navigate = useNavigate();


  const muuda = () => {
    tootedFailist[index] =  {
      "nimi": toodeRef.current.value, 
      "hind": hindRef.current.value,
      "aktiivne": aktiivneRef.current.checked,
      "pilt": piltRef.current.value
    }

    navigate("/halda-tooted");
  }


  return (
    <div>
      <label>Toote nimi</label> <br />
      <input ref={toodeRef}  type="text" defaultValue={leitud.toode}/> <br />
      <label>Toote hind</label> <br />
      <input ref={hindRef}  type="text" defaultValue={leitud.hind}/> <br />
      <label>Toote pilt</label> <br />
      <input ref={piltRef}  type="text"defaultValue={leitud.pilt} /> <br />
      <label>Toote aktiivsus</label> <br />
      <input ref={aktiivneRef}  type="checkbox" defaultChecked={leitud.aktiivne}/> <br />
      <button onClick={muuda}>Sisesta</button>
      <Link to={"/muuda-toode/" + index} >
              <button>Muuda</button>
              </Link>
    </div>
  )
}

export default MuudaToode