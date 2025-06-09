import { useState } from 'react';

function Books() {
    const [books, setBooks] = useState(["The Great Gatsby", "War and Peace", "Hamlet", "Moby Dick", "Pride and Prejudice", "The Alchemist"]);


function sorteeriAZ() {
    books.sort((a,b) => a.localeCompare(b));
    setBooks(books.slice());
    }

function sorteeriZA() {
    books.sort((a,b) => b.localeCompare(a));
    setBooks(books.slice());
    }

function sorteeriSonaPikkus() {
    books.sort((a, b) => a.length - b.length);
    setBooks(books.slice());
    }

function sorteeriTeineTahtAZ() {             
    books.sort((a,b) => a[1].localeCompare(b)); 
    setBooks(books.slice());
        
    }

function sorteeriSonadeArv() {             
    books.sort((a,b) => a.split("").length - b.split("").length); 
    setBooks(books.slice());
          
    }

function sorteeriEelviimaneTaht() {
    books.sort((a, b) => a[a.length - 2].localeCompare(b[b.length - 2]));
    setBooks(books.slice());
    }

function filtreeriTheAlgavad() {
    const vastus = books.filter(book => book.startsWith("The"));
    setBooks(vastus);
      }

function filtreeriSisaldabAnd() {
    const vastus = books.filter(book => book.includes("and"));
    setBooks(vastus);
        
    }

function filtreeriTahemargidRohkemKui10() {
    const vastus = books.filter(book => book.length >= 10);
    setBooks(vastus);
        
    }

function filtreeriTahemargidVahemKui7() {
    const vastus = books.filter(book => book.length < 7);
    setBooks(vastus);
      
    }

      //pole kindel järgmistes

function filtreeriKolmSonalist() {
    const vastus = books.filter(book => book.split(" ").length >= 3);
    setBooks(vastus);
    }
      
function filtreeriEelviimaneC() {
    const vastus = books.filter(book => book[book.length - 2] === "c");
    setBooks(vastus);
    }

    function kustuta(index) {
      const updated = [...books];
      updated.splice(index, 1);
      setBooks(updated);
    }
    

  return (
    <div>
        
        <button onClick={sorteeriAZ} >Sorteeri A-Z</button>
        <button onClick={sorteeriZA} >Sorteeri Z-A</button> 
        <button onClick={sorteeriSonaPikkus} >Sorteeri sõna pikkuse järgi</button>
        <button onClick={sorteeriTeineTahtAZ} >Sorteeri sõna teise tähe järgi</button>
        <button onClick={sorteeriSonadeArv} >Sorteeri sõnade arvu järgi</button>
        <button onClick={sorteeriEelviimaneTaht} >Sorteeri eelviimase tähe järgi</button>
        <br /><br />
        <button onClick={filtreeriTheAlgavad}>Jäta alles "The"-ga algavad</button>
        <button onClick={filtreeriSisaldabAnd}>Jäta alles mis sisaldab "And"</button>
        <button onClick={filtreeriTahemargidRohkemKui10}>Jäta alles pikemad kui 10 tähemärki</button>
        <button onClick={filtreeriTahemargidVahemKui7}>Jäta alles lühemad kui 7 tähemärki</button>
        <button onClick={filtreeriKolmSonalist}>Jäta alles 3 või rohkema sõnalised</button>
        <button onClick={filtreeriEelviimaneC}>Jäta alles mille eelviimane täht on "c"</button>

       

        <button onClick={() => setBooks([
          "The Great Gatsby", 
          "War and Peace", 
          "Hamlet", 
          "Moby Dick", 
          "Pride and Prejudice", 
          "The Alchemist"
        ])}>Originaali</button>

        <div>Kokku: {books.length} tk </div>  

        {books.map((book, index) => (
        <div key={book}>
            {book}
            <button onClick={() => kustuta(index)} >x</button>

    </div>
        )) }
        </div>
  )
  }

export default Books