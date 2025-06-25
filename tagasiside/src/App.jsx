import { Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Tagasiside from './pages/Tagasiside';
import TagasisideAndjad from './pages/TagasisideAndjad'
import Tegevused from './pages/Tegevused';
import Kasutajad from './pages/Kasutajad';

function App() {
  return (
    <div>
      <Link to="/">
      <button>Avalehele</button>
      </Link>
      <Link to="/tagasiside">
      <button>Tagasiside lehele</button>
      </Link>
      <Link to="/andjad">
      <button>Vaata, kes tagasisidet on andnud</button>
      </Link>
      <Link to="/tegevused">
      <button>Vaata, mis ülesandeid veel tegema pead</button>
      </Link>
      <Link to="/kasutajad">
      <button>Vaata kasutajaid</button>
      </Link>
      <Routes>
        <Route path="/" exact element={<div>Tere!</div>}  ></Route>
        <Route path="/tagasiside" exact element={<Tagasiside />}  ></Route>
        <Route path="/andjad" exact element={<TagasisideAndjad/>}  ></Route>
        <Route path="/tegevused" exact element={<Tegevused />} ></Route>
        <Route path="/kasutajad" exact element={<Kasutajad />} ></Route>
      </Routes>
    </div>
  );
}

export default App
