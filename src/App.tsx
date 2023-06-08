// npm i react-router-dom
import { Routes, Route, HashRouter} from 'react-router-dom'
import { useState } from 'react';
import Navbar from "./components/Navbar";
import Toggler from "./components/Toggler";
import Anmelden from './components/Anmelden';
import Registrieren from './components/Registrieren';
import Videosbereich from './components/Videosbereich';
function App() {
  const [togglerVisible, setTogglerVisibility] = useState(false);

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<div className="flex-column p-3 ">
          <Navbar click={() => setTogglerVisibility(!togglerVisible)} />
          {togglerVisible && <Toggler click={() => setTogglerVisibility(false)} />}
          <Videosbereich /> </div>}/>
        <Route path="/Anmelden" element={<Anmelden/>} />
        <Route path="/Registrieren" element={<Registrieren/>} />
        
      </Routes>
    </HashRouter>
      
  );
}
export default App;  
