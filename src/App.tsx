// npm i react-router-dom
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react';
import Navbar from "./components/Navbar";
import Toggler from "./components/Toggler";
import Anmelden from './components/Anmelden';
import Registrieren from './components/Registrieren';
import Videosbereich from './components/Videosbereich';
function App() {
  const [togglerVisible, setTogglerVisibility] = useState(false);

  return (
    <div>
      <Routes>
        <Route path="https://JYJiaying.github.io/pwa/" element={<div className="flex-column p-3 ">
          <Navbar click={() => setTogglerVisibility(!togglerVisible)} />
          {togglerVisible && <Toggler click={() => setTogglerVisibility(false)} />}
          <Videosbereich />
        </div>
        } />

      </Routes>
      <Routes>
        <Route path="https://JYJiaying.github.io/pwa/Anmelden" element={<Anmelden />} />
      </Routes><Routes>
        <Route path="https://JYJiaying.github.io/pwa//Registrieren" element={<Registrieren />} />
      </Routes>
    </div>
  );
}
export default App;  
