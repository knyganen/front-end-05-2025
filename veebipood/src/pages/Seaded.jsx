import { useState } from "react"

function Seaded() {
  const [keel, setKeel] = useState("et")
  return (
    <div>
      <div>Aktiivse keele lühend: </div>
      <button onClick={() => setKeel("et")}>Eesti</button>
      <button onClick={() => setKeel("en")}>English</button>
      <button onClick={() => setKeel("ru")}>Pycckuj</button>
      <button onClick={() => setKeel("es")}>Espanol</button>
     

      <br /> <br /> 
      {keel === "et" && <div>Leht on eestikeelne</div>}
      {keel === "en" && <div>Page is in English</div>}
      {keel === "ru" && <div>Страница на русском языке</div>}
      {keel === "es" && <div>La página está en español</div>}
      <br />
      {keel !== "et" && <div>Translations other than Estonian are not ready</div>}
    </div>
  )
}

export default Seaded