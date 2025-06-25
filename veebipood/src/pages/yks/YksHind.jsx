import { useParams } from "react-router-dom"
import hinnadFailist from "../../data/hinnad.json"

function YksHind() {
  const { index } = useParams();
  const leitudHind = hinnadFailist[index]; //kui võtan indexi järjekorranr abil, tuleb kasutada []

  if(leitudHind === undefined) {
    return <div>Hinda ei leitud</div>
  }

  return (
    <div>
      <div>Index:{index} </div>
      <div>Hind: {leitudHind.number} </div>
      <div>Hind: {leitudHind.sonana} </div>
    </div>
  )
}

export default YksHind