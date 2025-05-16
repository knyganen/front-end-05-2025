
import { Routes, Route, Link} from 'react-router-dom'
import './App.css'


function App() {
  

  return (
    <>
      <div>
        <Link to="/"><button>Main page</button></Link>
        <Link to="/about"><button>About</button></Link>
        <Link to="/news"><button>News</button></Link>
        <Link to="/contact"><button>Contact</button></Link>

        <Routes>
          <Route path='/' element={ <div>Main page</div>} />
          <Route path='/about' element={ <div>About page</div>} />
          <Route path='/news' element={ <div>News page</div>} />
          <Route path='/contact' element={ <div>Contact page</div>} />
        </Routes>
      </div>
    </>
  )
}

export default App
