
import kasutajaFailist from '../../data/kasutajad.json'
import { useParams } from 'react-router-dom';

function YksKasutaja() {
  const { kasutajaNimi } = useParams();
  const leitud = kasutajaFailist.find(kasutaja => kasutaja.nimi === kasutajaNimi);


  if(leitud === undefined) {
    return <div>Kasutajat ei leitud</div>
  }

  return (
    <div>
      <div>{leitud.email}</div>
      <div>{leitud.nimi}</div>
    </div>
  )
}

export default YksKasutaja