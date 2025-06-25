import { useNavigate, useParams, Link } from "react-router-dom";
import hinnadJSON from "../../data/hinnad.json";
import { useRef } from "react"

function MuudaHind() {
  const { index } = useParams();
  const hindRef = useRef();
  const sonanaRef = useRef();
  const navigate = useNavigate();

  const leitud = hinnadJSON[index];

  const muuda = () => {
    hinnadJSON[index] = {
      "hind": hindRef.current.value,
      "sonana": sonanaRef.current.value,
    };

    navigate("/halda-hinnad");
  };

  return (
    <div>
      <label>Hind (number)</label> <br />
      <input ref={hindRef} type="text" defaultValue={leitud.hind} /> <br />
      <label>Hind (sõnana)</label> <br />
      <input ref={sonanaRef} type="text" defaultValue={leitud.sonana} /> <br />
      <button onClick={muuda}>Muuda</button> <br />
      <Link to={"/muuda-hind/" + index} >
              <button>Muuda</button>
              </Link>

    </div>
  );
}

export default MuudaHind;
