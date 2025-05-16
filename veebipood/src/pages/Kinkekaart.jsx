import { useState } from "react"

function Kinkekaart() {
  const [summa, setSumma] = useState(20)

  return (
    <div>
      <button onClick={() => setSumma(20)}>20 € </button>
      <button onClick={() => setSumma(50)}>50 € </button>
      <button onClick={() => setSumma(100)}>100 € </button>
      <div>Kinkekaardi summa: {summa} €</div>
       <br />

       <button>-</button>
       <span>1</span>
       <button>+</button>

       <br /> <br />

       <div>Kokku summa: €</div>

    </div>
  )
}

export default Kinkekaart