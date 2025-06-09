import { useState } from 'react'
import hinnadFailist from "../../data/hinnad.json"
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
    hinnad.sort((a,b) => b - a)
    setHinnad(hinnad.slice());
}

const sorteeriKasvavalt = () => {
    hinnad.sort((a,b) => a - b) 
    setHinnad(hinnad.slice());
}

const filtreeriVaiksemaidKui50 = () => {
    const vastus = hinnadFailist.filter(hind => hind < 50);
    setHinnad(vastus);

}

const filtreeriSuuremaidKui100 = () => {
    const vastus = hinnadFailist.filter(hind => hind > 100);
    setHinnad(vastus);
}



return (
    <div>
       

        <button onClick={sorteeriKahanevalt}>Sorteeri kahanevalt</button>
        <button onClick={sorteeriKasvavalt}>Sorteeri kasvavalt</button>
        <br /><br />
        <button onClick={filtreeriVaiksemaidKui50}>Jäta alles väiksemad kui 50</button>
        <button onClick={filtreeriSuuremaidKui100}>Jäta alles suuremad kui 100</button>
        <br /><br />
        <button onClick={() => setHinnad([])} >Tühjenda</button>
        <button onClick={kustutaEsimene} >Kustuta esimene</button>
        <button onClick={kustutaTeine} >Kustuta teine</button>
        <button onClick={kustutaKolmas} >Kustuta kolmas</button>
        <button onClick={() => kustutaNeljas(3)} >Kustuta neljas</button> 

        <button onClick={() => setHinnad(hinnadFailist)} >Võta filtrid maha</button>
        <div>Kokku: {hinnad.length} tk </div>  
        {hinnad.map((hind, index) => 
        <div key={hind}>
            {hind}
            <button onClick={() => kustuta(index)} >x</button>
            </div>)}
    </div>
  )
}

export default Hinnad