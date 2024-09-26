import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
// import Router from './Pages/Router'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Router/> */}
    <App />
      </StrictMode>,
)
