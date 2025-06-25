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
import MuudaAuto from './pages/muuda/MuudaAuto';
import MuudaEsindus from './pages/muuda/MuudaEsindus';
import MuudaHind from './pages/muuda/MuudaHind';
import MuudaKasutaja from './pages/muuda/MuudaKasutaja';
import MuudaTootaja from './pages/muuda/MuudaTootaja';
import MuudaToode from './pages/muuda/MuudaToode';
import YksAuto from './pages/yks/YksAuto';
import YksEsindus from './pages/yks/YksEsindus';
import YksHind from './pages/yks/YksHind';
import YksKasutaja from './pages/yks/YksKasutaja';
import YksTootaja from './pages/yks/YksTootaja';
import YksToode from './pages/yks/YksToode';
import Kaart from './pages/Kaart';
import { ContactUs } from './pages/ContactUs';
import Cars from './pages/api/Cars';
import ApiHome from './pages/api/ApiHome';
import Countries from './pages/api/Countries';
import Tarnija1 from './pages/api/Tarnija1';
import Tarnija2 from './pages/api/Tarnija2';
import Tarnija3 from './pages/api/Tarnija3';
import Vocabulary from './pages/api/Vocabulary';
import ParcelMachines from './pages/api/ParcelMachines';


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

        <Route path= '/auto/:autoNimi' element={ <YksAuto/>} />
        <Route path= '/esindus/:keskus' element={ <YksEsindus/>} />
        <Route path= '/hind/:index' element={ <YksHind/>} />
        <Route path= '/kasutaja/:kasutajaNimi' element={ <YksKasutaja/>} />
        <Route path= '/tootaja/:tootaja' element={ <YksTootaja/>} />
        <Route path= '/toode/:tooteNimi' element={ <YksToode/>} />

        <Route path= '/muuda-auto/:index' element={ <MuudaAuto/>} />
        <Route path= '/muuda-esindus/:index' element={ <MuudaEsindus/>} />
        <Route path= '/muuda-hind/:index' element={ <MuudaHind/>} />
        <Route path= '/muuda-kasutaja/:index' element={ <MuudaKasutaja/>} />
        <Route path= '/muuda-tootaja/:index' element={ <MuudaTootaja/>} />
        <Route path= '/muuda-toode/:index' element={ <MuudaToode/>} />

        <Route path= '/kaart' element={ <Kaart/>} />
        <Route path= '/kontakteeru' element={ <ContactUs/>} />

        <Route path= '/api-home' element={ <ApiHome/>} />
        <Route path= '/cars' element={ <Cars/>} />
        <Route path= '/countries' element={ <Countries/>} />
        <Route path= '/tarnija1' element={ <Tarnija1/>} />
        <Route path= '/tarnija2' element={ <Tarnija2/>} />
        <Route path= '/tarnija3' element={ <Tarnija3/>} />
        <Route path= '/vocabulary' element={ <Vocabulary/>} />
        <Route path= '/parcelmachines' element={ <ParcelMachines/>} />

        <Route path= '/*' element={ <Notfound/>} />
      </Routes>
        
    </>
  )
}

export default App
