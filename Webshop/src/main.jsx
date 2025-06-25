import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import App from './App.jsx'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter future={{
    v7_startTransition: true,
    v7_relativeSplatPath: true
  }}>
    
    <App />
    <ToastContainer />
    </BrowserRouter>
  </StrictMode>,
)
