import { Link, useNavigate } from 'react-router-dom'
import { Fragment } from "react";
import { useState } from 'react';
import Navbar from "./Navbar";
import Toggler from "./Toggler";
import Registrieren from './Registrieren';
import PasswordErsetzen from './PasswordErsetzen';

function Anmelden() {
    const [togglerVisible, setTogglerVisibility] = useState(false);
    const navigate = useNavigate();


    return (
        <Fragment>
            <div className="m-3 column-gap-3">
                <Navbar click={() => setTogglerVisibility(!togglerVisible)} />
                {togglerVisible && <Toggler click={() => setTogglerVisibility(false)} />}
                <div className="btn-group p-5 mt-4 d-flex justify-content-center">
                    <Link to="/pwa/anmelden" relative="path" className="btn btn-primary active" aria-current="page" onClick={() => { <Anmelden /> }}>Anmelden</Link>
                    <Link to="/pwa/registrieren" relative="path" className="btn btn-primary" aria-current="page" onClick={() => { <Registrieren /> }}>Jetzt Registrieren</Link>
                </div>
                <form className=" gt-3 ">
                    <div className="mb-3 ">
                        <input placeholder="Email-Adress" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <input placeholder="Password" type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" >Eingeloggt bleiben</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Anmelden</button>
                </form>
                <Link to="/pwa/password" relative="path" className="navbar-brand mt-5" aria-current="page" onClick={() => { <PasswordErsetzen /> }}>Password vergessen?</Link>
            </div>
        </Fragment>
    );
}
export default Anmelden;