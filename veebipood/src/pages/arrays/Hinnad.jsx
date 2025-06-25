import { useState } from 'react'
import hinnadFailist from "../../data/hinnad.json"
import ArraysHome from './ArraysHome';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
//renderdamine --> väljakuvamine
//re-renderdamine --> setteriga HTMLi muutmine

//kõigepealt näeme yhte HTMLi (mis tuleb algväärtusega)
//re-renderdamisel muudetakse HTMLi muutujaid muutes

//re-renderdamisel käiakse kogu HTML uuesti läbi --> algusest lõpuni
//renderdamisel tehakse tööd --> kuvatakse HTML välja
//re-renderdamisel tööd ei tehta kui on teada mäluaadressid
//React paneb automaatselt kõigile mäluaadressid, aga mitte tsykli
//sees olevatele HTML elementidele. Selle jaoks on vaja panna key=""

//jälgi neljandat! onClick={()} => setHinnad([]) --> panen () => ja lõppu () kui saadan midagi kaasa  
//onClick={kustutaEsimene} --> ei pane () => ja lõppu () kui mul pole midagi saata
//onClick)={kustutaNeljas(3)} --> tekitab infinite loop errori

function Hinnad() {                 //0  1   2 jne  kui tahta viimast kustutada, siis all length -1

const [hinnad, setHinnad] = useState(hinnadFailist.slice());
const otsingRef = useRef();


const kustutaEsimene = () => {
    hinnad.splice(0,1); //backendis on .splice() asemel .delete .remove splice(mitmendat, mitu tk) (btw 1 on alati 1)
    setHinnad(hinnad.slice()); //slice() --> kustutab mälukoha
}

const kustutaTeine = () => {
    hinnad.splice(1,1); 
    setHinnad(hinnad.slice()); 
}

const kustutaKolmas = () => {
    hinnad.splice(2,1); 
    setHinnad(hinnad.slice()); 
}

const kustutaNeljas = (index) => {
    hinnad.splice(index,1); 
    setHinnad(hinnad.slice()); 
}

const kustuta = (index) => {
    hinnad.splice(index,1); 
    setHinnad(hinnad.slice()); 
}

const sorteeriKahanevalt = () => {
    hinnad.sort((a,b) => b.number - a.number)
    setHinnad(hinnad.slice());
}

const sorteeriKasvavalt = () => {
    hinnad.sort((a,b) => a.number - b.number) 
    setHinnad(hinnad.slice());
}

const filtreeriVaiksemaidKui25 = () => {
    const vastus = hinnadFailist.filter(hind => hind.number < 50);
    setHinnad(vastus);

}

const filtreeriSuuremaidKui50 = () => {
    const vastus = hinnadFailist.filter(hind => hind.number > 100);
    setHinnad(vastus);
}

const arvutaKokku = () => {
    let summa = 0;
    hinnad.forEach(hind => summa = summa + hind.number);
    return summa;

}
    //arvuta numbrid kokku nagu ostukorvis

    //kui vaja numbrit kuvada otsingus --> toString()
    function otsi () {
        const vastus = hinnadFailist.filter(hind => hind.number.toString().includes(otsingRef.current.value));
        setHinnad(vastus);
      
      }

return (
    <div>
        <label>Otsi</label>
        <input ref={otsingRef} onChange={otsi}   type="number" />
       <ArraysHome />

        <button onClick={sorteeriKahanevalt}>Sorteeri kahanevalt</button>
        <button onClick={sorteeriKasvavalt}>Sorteeri kasvavalt</button>
        <br /><br />
        <button onClick={filtreeriVaiksemaidKui25}>Jäta alles väiksemad kui 25</button>
        <button onClick={filtreeriSuuremaidKui50}>Jäta alles suuremad kui 50</button>
        <br /><br />
        <button onClick={() => setHinnad([])} >Tühjenda</button>
        <button onClick={kustutaEsimene} >Kustuta esimene</button>
        <button onClick={kustutaTeine} >Kustuta teine</button>
        <button onClick={kustutaKolmas} >Kustuta kolmas</button>
        <button onClick={() => kustutaNeljas(3)} >Kustuta neljas</button> 

        <button onClick={() => setHinnad(hinnadFailist)} >Võta filtrid maha</button>
        <div>Kokku: {hinnad.length} tk </div>  
        {hinnad.map((hind, index) => 
        <div key={hind.number}>
            <div>{hind.number} </div>
            <div>{hind.sonana} </div>
            <button onClick={() => kustuta(index)} >x</button>
            <Link to={"/hind/" + index} >
            <button>Vt lähemalt</button>
            </Link>
        

            </div>)}
            <div>Hindade summa: {arvutaKokku()} €</div>
    </div>
  )
}

export default Hinnad

//hinnad:
// {"number": 10, "sonana": "kümme"}
//{"number": 123, "sonana"_ "sada kakskümmend kolm"}