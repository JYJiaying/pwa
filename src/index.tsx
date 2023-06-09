import ReactDOM from 'react-dom/client'
import React from 'react'
import App from './App'
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'
import './App.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
