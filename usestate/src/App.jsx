import { BrowserRouter, Route, Routes, Link, Navigate } from "react-router-dom";
import Kujundus from "./pages/Kujundus";
import Muutmine from "./pages/Muutmine";
import Ilmumine from "./pages/Ilmumine";
import Hind from "./pages/Hind";
import Telefon from "./pages/Telefon";
import Kontakt from "./pages/Kontakt";
import Meist from "./pages/Meist";
import './App.css'
import { useState } from "react";
import { useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Months from "./pages/Months";
import Animals from "./pages/Animals";
import Words from "./pages/Words";


function App() {
  const [sisselogitud, muudaSisselogitud] = useState("ei");
  const [sonum, muudaSonum] = useState("");
  const kasutajaNimiRef = useRef();
  const paroolRef = useRef();


  const logiSisse = () => {
   if (paroolRef.current.value === "123") {
    muudaSisselogitud("jah");
    toast.success(kasutajaNimiRef.current.value + ",Oled sisse logitud");
  } else {
    toast.error("Vale parool");
  }

if (paroolRef.current.value.length < 8) {
  toast.error("Parool liiga lühike!");
  return;
}

if (paroolRef.current.value.toLowerCase() === paroolRef.current.value) {
  toast.error("Peab sisaldama väikest tähte");
}

if (paroolRef.current.value.toUpperCase() === paroolRef.current.value) {
  toast.error("Peab sisaldama suurt tähte");
}

 if (paroolRef.current.value.includes("%") === false) {
  toast.error("Parool peab sisaldama % märki!");
  return;
}
 
}

const logiValja = () => {
  muudaSisselogitud("ei");
  toast.error("");

 }


  return (

    <BrowserRouter>
    <div className="App">

        <div>{sonum}</div>
        { sisselogitud === "ei" && <div> 
        <label>Kasutajanimi</label> <br />
        <input ref={kasutajaNimiRef} type="text" /> <br />
        <label>Parool</label> <br />
        <input ref={paroolRef} type="password" /> <br />
        </div>
        }

        { sisselogitud === "ei" && <button onClick={logiSisse}>Logi sisse</button>}
        { sisselogitud === "jah" && <button onClick={() => muudaSisselogitud("ei")} >Logi välja</button>}
       

      <Link to="/ilmumine"><button>Ilmumine</button></Link>
      <Link to="/kujundus"><button>Kujundus</button></Link>
      <Link to="/muutmine"><button>Muutmine</button></Link>
      <Link to="/hind"><button>Hind</button></Link>
      <Link to="/telefon"><button>Telefon</button></Link>
      <Link to="/kontakt"><button>Kontakt</button></Link>
      <Link to="/meist"><button>Meist</button></Link>
      <Link to="/months"><button>Months</button></Link>
      <Link to="/animals"><button>Animals</button></Link>
      <Link to="/words"><button>Words</button></Link>

      <Routes>
        <Route path="/" element={ <Navigate to= "/ilmumine" /> } />
        <Route path="/ilmumine" element={ <Ilmumine />} />
        <Route path="/kujundus" element={ <Kujundus/> } />
        <Route path="/muutmine" element={ <Muutmine/> } />
        <Route path="/hind" element={ <Hind/> } />
        <Route path="/telefon" element={ <Telefon/> } />
        <Route path="/kontakt" element={<Kontakt/>} ></Route>
        <Route path="/meist" element={ <Meist />} ></Route>
        <Route path="/months" element={<Months/>} ></Route>
        <Route path="/animals" element={<Animals/>} ></Route>
        <Route path="/words" element={<Words/>} ></Route>
      </Routes>

      <ToastContainer
       position="bottom-right"
       autoClose={2000}
       theme="dark"
      />

    </div>
    </BrowserRouter>
  )

}
export default App
