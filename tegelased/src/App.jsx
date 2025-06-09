import './App.css'
import { Link, Route, Routes } from "react-router-dom";
import Avaleht from "./pages/Avaleht";
import ValitudTegelased from "./pages/ValitudTegelased"
import Lisategelane from "./pages/Lisategelane"

function App() {
  return (
    <div>
      <Link to="/">
      <button>Avalehele</button>
      </Link>
      <Link to="/lisa-tegelane">
      <button>Lisa tegelane</button>
      </Link>
      <Link to="/valitud-tegelased">
      <button>Valitud tegelased</button>
      </Link>
      <Routes>
        <Route path="" element={ <Avaleht />} />
        <Route path="lisa-tegelane" element={ <Lisategelane />} />
        <Route path="valitud-tegelased" element={ <ValitudTegelased />} />
      </Routes>
    </div>
  )
}

export default App
