import { useState } from "react"

function Avaleht() {
  const [laigitud, setLaigitud] = useState(false);


  return (
    <div>
      {laigitud === true && <img src="/laigitud.svg" alt="" />}
      {laigitud === false && <img src="/mittelaigitud.svg" alt="" />}
     <button onClick={() => setLaigitud(true)}>Laik peale</button>
     <button onClick={() => setLaigitud(false)}>Laik maha</button>
    

      <br /><br />

      <button onClick={() => setLaigitud(!laigitud)}>Muuda laiki</button>

      <div>Muuda kogust!</div>
      <button>Tagasi nulli</button>
      <br />
      <button>-</button>
      <span>7</span>
      <button>+</button>
    </div>
  )
}

export default Avaleht