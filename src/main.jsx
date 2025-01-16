import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import data from './api/data.json'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App data={data} />
  </StrictMode>,
)
