import { Link } from "react-router-dom";

function Uudised() {
  const uudised = JSON.parse(localStorage.getItem("uudised")) || [];

  return (
    <div>
      <div>See on uudiste leht, nähtav aadressil: localhost:5173/uudised</div>

      {uudised.length === 0 && <div>Meie tiimiga liitus hiljuti Kalle, tule pane ta oskused tõlgina proovile!</div>}
      <div>{uudised.map((uudis, index) => 
          <Link to={"/uudis/" + index}>
            <div>{uudis}</div>
          </Link>
        )}</div>
    </div>);
}

export default Uudised;
