import ReactDOM from 'react-dom/client'
import App from './App'
import { Routes, Route } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.css'
import './index.css'
import './App.css'

import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
  <Routes>
  <App/>
</Routes>

  // </React.StrictMode>,
)
