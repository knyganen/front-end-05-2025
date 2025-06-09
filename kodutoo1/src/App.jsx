import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import './App.css'
import Books from './pages/Books'
import Numbers from './pages/Numbers';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
     <Link to="/books">
     <button>Raamatud</button>
     </Link>

     <Link to="/numbers">
     <button>Numbrid</button>
     </Link>

     <Routes>
      <Route path="/books" element={<Books />} ></Route>
      <Route path="/numbers" element={<Numbers />} ></Route>
     </Routes>
     </div>
    </>
  )
}

export default App
