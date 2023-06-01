// npm i react-router-dom
import { Routes, Route } from 'react-router-dom'
import {useState } from 'react';
import Navbar from "./components/Navbar";
import Toggler from "./components/Toggler";
import Anmelden from './components/Anmelden';
import Registrieren from './components/Registrieren';
import Videosbereich from './components/Videosbereich';
function App() {
  const [togglerVisible, setTogglerVisibility] = useState(false);

  return (
    // <Fragment>

    //   <div className="flex-column">
    //     <Navbar click={() => setTogglerVisibility(!togglerVisible)} />
    //     {togglerVisible && <Toggler click={() => setTogglerVisibility(false)} />}
    //     <Cards />
    //   </div>
    // </Fragment>
    // <Routes>
    //   <Route path="/" element={<div className="flex-column p-3 ">
        // <Navbar click={() => setTogglerVisibility(!togglerVisible)} />
        // {togglerVisible && <Toggler click={() => setTogglerVisibility(false)} />}
        <Videosbereich/>
    //   </div>
    //   } />
    //   <Route path="/Anmelden" element={<Anmelden/>}/>
    //   <Route path="/Registrieren" element={<Registrieren/>}/>



    //   </Routes>
  );
}
export default App;  
