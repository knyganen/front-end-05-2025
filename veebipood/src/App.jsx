import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <img className="pilt" src="https://www.bellaandduke.com/wp-content/uploads/2024/10/Border-collie-owners-dog-breed-guide-1.png" alt="" />
    
    
    <button 
    className="nupp">Ostukorvi</button>
    
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        
    </>
  )
}

export default App
