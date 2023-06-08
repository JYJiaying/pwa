import ReactDOM from 'react-dom/client'
import App from './App'
import { Routes, Route } from 'react-router-dom'

import Anmelden from './components/Anmelden';
import Registrieren from './components/Registrieren';
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'
import './App.css'

import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
  <Routes>
        <Route path="/pwa/" element={<App/>}/>
        <Route path="/pwa/anmelden/" element={<Anmelden/>} />
        <Route path="/pwa/registrieren/" element={<Registrieren/>} />
      </Routes>

  // </React.StrictMode>
)
