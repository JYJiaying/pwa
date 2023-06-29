// npm i react-router-dom
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react';
import Navbar from "./components/Navbar";
import Toggler from "./components/Toggler";
import Anmelden from './pages/Anmelden';
import Registrieren from './pages/Registrieren';
import Videosbereich from './pages/Videosbereich';
import PasswordErsetzen from './pages/PasswordErsetzen';
import Video from './pages/Video';
import Test from './components/Test';
function App() {
  const [togglerVisible, setTogglerVisibility] = useState(false);
  const url = 'https://www.youtube.com/watch?v=d46Azg3Pm4c';

  return (
    <Routes>
      <Route path="/pwa" element={<div className="flex-column p-3 ">
        <Navbar click={() => setTogglerVisibility(true)} />
        {togglerVisible && <Toggler click={() => setTogglerVisibility(false)} />}
        <Videosbereich /> </div>} />
      <Route path="/pwa/anmelden" element={<Anmelden />} />
      <Route path="/pwa/registrieren" element={<Registrieren />} />
      <Route path="/pwa/password" element={<PasswordErsetzen />} />
      <Route path="/pwa/video" element={<Video video={url} />} />
      <Route path="/pwa/test" element={<Test />} />
    </Routes>


  );
}
export default App;  
