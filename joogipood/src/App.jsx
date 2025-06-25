
import './App.css'
import { Link, Route, Routes } from 'react-router-dom';
import LisaJooke from './pages/LisaJooke'
import HaldaJooke from './pages/HaldaJooke'
import Jook from './pages/Jook';



function App() {
return (
    <>
    <Link to="/"><button>Avalehele</button></Link>
    <Link to="/lisa"><button>Lisa jooke</button></Link>
    <Link to="/halda"><button>Halda jooke</button></Link>
      <Routes>
        <Route path="/" exact element={<div>Tere!</div>}  ></Route>
        <Route path="/lisa" exact element={<LisaJooke />}  ></Route>
        <Route path="/halda" exact element={<HaldaJooke/>}  ></Route>
        <Route path="/jook:number" exact element={<HaldaJooke/>}  ></Route>
      </Routes>
   </>
  )
  
}

export default App
