import ReactDOM from 'react-dom/client'
import App from './App'
import { Routes, Route, HashRouter } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.css'
import './index.css'

import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
    <Router>
    <App/>
    </Router>

  // </React.StrictMode>
)
