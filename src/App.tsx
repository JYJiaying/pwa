// npm i react-router-dom
import { Routes, Route} from 'react-router-dom'
import { useState } from 'react';
import Navbar from "./components/Navbar";
import Toggler from "./components/Toggler";
import Anmelden from './components/Anmelden';
import Registrieren from './components/Registrieren';
import Videosbereich from './components/Videosbereich';
import PasswordErsetzen from './components/PasswordErsetzen';
import Video from './components/Video';
function App() {
  const [togglerVisible, setTogglerVisibility] = useState(false);
  const url = 'https://www.youtube.com/watch?v=d46Azg3Pm4c';
  return (
      <Routes>
        <Route path="/pwa" element={<div className="flex-column p-3 ">
          <Navbar click={() => setTogglerVisibility(true)} />
          {togglerVisible && <Toggler click={() => setTogglerVisibility(false)} />}
          <Videosbereich /> </div>}/>
        <Route path="/pwa/anmelden" element={<Anmelden/>} />
        <Route path="/pwa/registrieren" element={<Registrieren/>} />
        <Route path="/pwa/password" element={<PasswordErsetzen/>} />
        <Route path="/pwa/video" element={<Video video = {url}/>} />
      </Routes>
  );
}
export default App;  
