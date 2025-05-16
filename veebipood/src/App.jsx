import { useState } from 'react'
import './App.css'
import { Link, Route, Routes } from 'react-router-dom';
import Avaleht from './pages/Avaleht';
import Ostukorv from './pages/Ostukorv';
import Kinkekaart from './pages/Kinkekaart';
import Esindused from './pages/Esindused';
import Notfound from './pages/NotFound';
import Seaded from './pages/Seaded';
import Tooted from './pages/Tooted';
import Lisatoode from './pages/Lisatoode';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Link to="/"><img className="pilt" src="https://www.bellaandduke.com/wp-content/uploads/2024/10/Border-collie-owners-dog-breed-guide-1.png" alt="" /></Link>
      <Link to="/ostukorv"><button className="nupp">Ostukorvi</button></Link>
      <Link to="/osta-kinkekaart"><button className="nupp">Kinkekaardid</button></Link>
      <Link to="/esindused"><button className="nupp">Esindused</button></Link>
      <Link to="/ostukorv"><button className="nupp">Ostukorv</button></Link>
      <Link to="/seaded"><button className="nupp">Seaded</button></Link>
      <Link to="/lisatoode"><button className="nupp">Lisatoode</button></Link>
      <Link to="/tooted"><button className="nupp">Tooted</button></Link>
    

        <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
        </button>

      <Routes>
        <Route path= '/' element={ <Avaleht/> } />
        <Route path= '/ostukorv' element={ <Ostukorv/> } />
        <Route path= '/osta-kinkekaart' element={ <Kinkekaart/>} />
        <Route path= '/esindused' element={ <Esindused/>} />
        <Route path= '/ostukorv' element={ <Ostukorv/>} />
        <Route path= '/seaded' element={ <Seaded/>} />
        <Route path= '/lisatoode' element={ <Lisatoode/>} />
        <Route path= '/tooted' element={ <Tooted/>} />
        <Route path= '/*' element={ <Notfound/>} />
      </Routes>
        
    </>
  )
}

export default App
