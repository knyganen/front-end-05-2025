
import { useParams } from 'react-router-dom'
import tootedFailist from "../../data/tooted.json"

function YksToode() {
  const { tooteNimi } = useParams();
  const leitud = tootedFailist.find(toode => toode.nimi === tooteNimi)

  if(leitud === undefined) {
    return <div>Toodet ei leitud</div>
  }

  return (
    <div>
     <div>
    <div>{leitud.nimi}</div>
    <div>{leitud.hind}</div>
    <div><img className="pilt" src={leitud.pilt}  alt="" /> </div>
    <div>{leitud.aktiivne ? "Toode on aktiivne" : "Toode on mitteaktiivne"} </div>
    </div>
    </div>
  )
}

export default YksToode