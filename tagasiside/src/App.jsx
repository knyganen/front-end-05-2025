import { Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Tagasiside from './pages/Tagasiside';
import TagasisideAndjad from './pages/TagasisideAndjad'

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
      <button>Tagasisideandjate lehele</button>
      </Link>
      <Routes>
        <Route path="/" exact element={<div>Tere!</div>}  ></Route>
        <Route path="/tagasiside" exact element={<Tagasiside />}  ></Route>
        <Route path="/andjad" exact element={<TagasisideAndjad/>}  ></Route>
      </Routes>
    </div>
  );
}

export default App
