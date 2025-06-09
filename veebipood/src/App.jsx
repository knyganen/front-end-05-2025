import './App.css'
import {Route, Routes } from 'react-router-dom';
import Avaleht from './pages/Avaleht';
import Ostukorv from './pages/Ostukorv';
import Kinkekaart from './pages/Kinkekaart';
import Esindused from './pages/arrays/Esindused';
import Notfound from './pages/NotFound';
import Seaded from './pages/Seaded';
import Tooted from './pages/arrays/Tooted';
import Lisatoode from './pages/Lisatoode';
import Kalkulaator from './pages/Kalkulaator';
import Menu from './components/Menu';
import Hinnad from './pages/arrays/Hinnad';
import Tootajad from './pages/arrays/Tootajad';
import Kasutajad from './pages/arrays/Kasutajad';
import Autod from './pages/arrays/Autod';
import HaldaAutod from './pages/halda/HaldaAutod';
import HaldaEsindused from './pages/halda/HaldaEsindused';
import HaldaHinnad from './pages/halda/HaldaHinnad';
import HaldaTootajad from './pages/halda/HaldaTootajad';
import HaldaTooted from './pages/halda/HaldaTooted';
import HaldaKasutajad from './pages/halda/HaldaKasutajad';

import HaldaHome from './pages/halda/HaldaHome';
import ArraysHome from './pages/arrays/ArraysHome';


function App() {
 

  return (
    <>
    
    <Menu />


      <Routes>
        <Route path= '/' element={ <Avaleht/> } />
        <Route path= '/ostukorv' element={ <Ostukorv/> } />
        <Route path= '/osta-kinkekaart' element={ <Kinkekaart/>} />
        <Route path= '/ostukorv' element={ <Ostukorv/>} />
        <Route path= '/seaded' element={ <Seaded/>} />
        <Route path= '/lisatoode' element={ <Lisatoode/>} />
        <Route path= '/kalkulaator' element={ <Kalkulaator/>} /> 

        <Route path= '/arrays-home' element={ <ArraysHome/>} />
        <Route path= '/autod' element={ <Autod/>} />
        <Route path= '/esindused' element={ <Esindused/>} />
        <Route path= '/hinnad' element={ <Hinnad/>} />
        <Route path= '/kasutajad' element={ <Kasutajad/>} />
        <Route path= '/tootajad' element={ <Tootajad/>} />
        <Route path= '/tooted' element={ <Tooted/>} />

        <Route path= '/halda-home' element={ <HaldaHome/>} />
        <Route path= '/halda-autod' element={ <HaldaAutod/>} />
        <Route path= '/halda-esindused' element={ <HaldaEsindused/>} />
        <Route path= '/halda-hinnad' element={ <HaldaHinnad/>} />
        <Route path= '/halda-kasutajad' element={ <HaldaKasutajad/>} />
        <Route path= '/halda-tootajad' element={ <HaldaTootajad/>} />
        <Route path= '/halda-tooted' element={ <HaldaTooted/>} />

        <Route path= '/*' element={ <Notfound/>} />
      </Routes>
        
    </>
  )
}

export default App
