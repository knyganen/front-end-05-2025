import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Avaleht from './pages/Avaleht';
import VaataArvuteid from './pages/VaataArvuteid';
import LisaArvuti from './pages/LisaArvuti';

function App() {
 return (
  <div>
    <Link to="/">
    <button>Avalehele</button>
    </Link>
    <Link to="/all">
    <button>Vaata sülearvuteid</button>
    </Link>
    <Link to="/add">
    <button>Lisa sülearvuti</button>
    </Link>
<Routes>
<Route path="/" exact element={ <Avaleht />}></Route>
<Route path="/all" exact element={ <VaataArvuteid/>} ></Route>
<Route path="/add" exact element={ <LisaArvuti/>}></Route>
</Routes>
  </div>
  );
}

export default App
