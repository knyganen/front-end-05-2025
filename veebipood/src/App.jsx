import { useState } from 'react'
import './App.css'
import { Link, Route, Routes } from 'react-router-dom';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Link to="/">
        <img className="pilt" src="https://www.bellaandduke.com/wp-content/uploads/2024/10/Border-collie-owners-dog-breed-guide-1.png" alt="" />
      </Link>

      <Link to="/ostukorv">
        <button className="nupp">Ostukorvi</button>
      </Link>

      <Link to="/osta-kinkekaart">
        <button className="nupp">Kinkekaardid</button>
      </Link>

      <Link to="/esindused">
        <button className="nupp">Esindused</button>
      </Link>

        <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
        </button>

      <Routes>
        <Route path= '/' element={ <div>Avalehe leht</div>} />
        <Route path= '/ostukorv' element={ <div>Ostukorvi leht</div>} />
        <Route path= '/osta-kinkekaart' element={ <div>Kinkekaardi leht</div>} />
        <Route path= '/esindused' element={ <div>Esinduse leht</div>} />
      </Routes>
        
    </>
  )
}

export default App
