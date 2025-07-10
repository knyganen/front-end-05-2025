import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { CartSumContextProvider } from './context/CartSumContextProvider.js'
import 'react-toastify/dist/ReactToastify.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import App from './App.js'
import './i18n.js'
import { AuthContextProvider } from './context/AuthContextProvider.js'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter future={{
      
    v7_startTransition: true,
    v7_relativeSplatPath: true
  }}>
    <CartSumContextProvider>
      <AuthContextProvider>
      <App />
      </AuthContextProvider>
    </CartSumContextProvider>
    </BrowserRouter>
  </StrictMode>,
)
