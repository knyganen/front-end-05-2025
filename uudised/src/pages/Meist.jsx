import { useState } from "react";

function Meist() {
  const [kontakt, n2itaKontakt] = useState("");
  return (  <div>

    <div>See on meist leht, nähtav localhost: 5173/meist aadressil</div>
    <div>Meie töötajad:</div>
    <br /> 
    <div>John Smith</div>
    <div>Büroojuht</div>
    <button onClick={() => n2itaKontakt('+3456788')}>Võta ühendust</button>
    <br /> <br />
    <div>Kalle Blomkvist</div>
    <div>Tõlk</div>
    <button onClick={() => n2itaKontakt('+3456789')}>Võta ühendust</button>
    <br /> <br />
    <div>Maali Maailm</div>
    <div>Sekretär</div>
    <button onClick={() => n2itaKontakt('+3456790')}>Võta ühendust</button>
    <br /> <br />
    { kontakt  !== "" && <div>Tema kontakt: {kontakt}</div>}
    
    </div>

  ) 

}


export default Meist