import { useState } from 'react'
import './App.css'
import { Routes, Route, Link } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

     <div>
      <Link to="/"><button>Avaleht</button></Link>
      <Link to="/uudised"><button>Uudised</button></Link>
      <Link to="/kontakt"><button>Kontakt</button></Link>
      <Link to="/meist"><button>Meist</button></Link>

     <Routes>
        <Route path='/' element={ <div>Avalehe leht</div>} />
        <Route path='/uudised' element={ <div>Uudiste leht</div>} />
        <Route path='/kontakt' element={ <div>Kontakti leht</div>} />
        <Route path='/meist' element={ <div>Meist leht</div>} />
      </Routes>
     </div>
    </>
  )
}

export default App
