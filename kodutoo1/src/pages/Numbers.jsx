import { useState, useRef } from 'react'

function Numbers() {
const [numbers, setNumbers] = useState([4, 23, 7, 39, 19, 0, 9, 14, 135, 8, 2]);
const numberRef = useRef();

const lisa = () => {
    numbers.push(numberRef.current.value);
    setNumbers(numbers.slice());

    };

    const kustuta = (index) => {
        numbers.splice(index, 1);
        setNumbers(numbers.slice());
      };

    const sorteeriKasvavalt = () => {
        numbers.sort((a,b) => a - b) 
        setNumbers(numbers.slice());
    }
    const sorteeriKahanevalt = () => {
        numbers.sort((a,b) => b - a)
        setNumbers(numbers.slice());
    }

    const sorteeriEsimeseNumbriJargiAZ = () => {
        numbers.sort((a, b) => 
          a.toString().localeCompare(b.toString()));
        setNumbers(numbers.slice());
      };
      
      const sorteeriEsimeseNumbriJargiZA = () => {
        numbers.sort((a, b) => 
            b.toString().localeCompare(a.toString()));
          setNumbers(numbers.slice());
      };
      


    const filtreeriSuuremaidKui8 = () => {
        const vastus = numbers.filter(number => number > 8);
        setNumbers(vastus);
    }
    const filtreeriVaiksemaidKui10 = () => {
        const vastus = numbers.filter(number => number < 10);
        setNumbers(vastus);
    
    }

      const filtreeriPaarisarvud = () => {
        const vastus = numbers.filter(number => number % 2 === 0);
        setNumbers(vastus);
      };
      
      const filtreeriPaaritudArvud = () => {
        const vastus = numbers.filter(number => number % 2 !== 0);
        setNumbers(vastus);
      };
//ei saanud päris aru, kuhu .toString lisada
      const filtreeri1gaAlgavad = () => {
        const vastus = numbers.filter(number => number.toString().startsWith("1"));
        setNumbers(vastus);
      }
      
      const filtreeriSisaldabKolme = () => {
      const vastus = numbers.filter(number => number.toString().includes("3"));
      setNumbers(vastus);
    }
      
    
    
  

  return (
    <div>
<label>Hind</label> <br />
        <input ref={numberRef}  type="text" /> <br />
        <button onClick={lisa}>Lisa</button> <br />
        <br /><br />
        <button onClick={sorteeriKasvavalt}>Sorteeri kasvavalt</button>
        <button onClick={sorteeriKahanevalt}>Sorteeri kahanevalt</button>
        <button onClick={sorteeriEsimeseNumbriJargiAZ}>Sorteeri esimese numbri järgi A-Z</button>
        <button onClick={sorteeriEsimeseNumbriJargiZA}>Sorteeri esimese numbri järgi Z-A</button>

       
        <br /><br />
        <button onClick={filtreeriSuuremaidKui8}>Jäta alles suuremad kui 8</button>
        <button onClick={filtreeriVaiksemaidKui10}>Jäta alles väiksemad kui 10</button>
        <button onClick={filtreeriPaarisarvud}>Jäta alles paarisarvud</button>
        <button onClick={filtreeriPaaritudArvud}>Jäta alles paaritud arvud</button>
        <button onClick={filtreeri1gaAlgavad}>Jäta alles 1ga algavad arvud</button>
        <button onClick={filtreeriSisaldabKolme}>Jäta alles arvud, mis sisaldavad 3</button>
        <br /><br />
        <button onClick={() => setNumbers ([])} >Tühjenda</button>
        

        <button onClick={() => setNumbers([4, 23, 7, 39, 19, 0, 9, 14, 135, 8, 2])} >Originaali</button>
        <div>Kokku: {numbers.length} tk </div>  
        {numbers.map((number, index) => 
        <div key={number}>
            {number}
            <button onClick={() => kustuta(index)} >x</button>
            </div>)}

    </div>
  )
}

export default Numbers