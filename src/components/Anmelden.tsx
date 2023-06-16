import { Routes, Route, HashRouter, useNavigate} from 'react-router-dom'
import { Fragment } from "react";
import { useState } from 'react';
import Navbar from "./Navbar";
import Toggler from "./Toggler";
import { Link } from "react-router-dom";
function Anmelden() {
    const [togglerVisible, setTogglerVisibility] = useState(false);
    const navigate = useNavigate();


    return (
        <Fragment>
            <div className="m-3 column-gap-3">
                <Navbar click={() => setTogglerVisibility(!togglerVisible)} />
                {togglerVisible && <Toggler click={() => setTogglerVisibility(false)} />}
                <div className="btn-group p-5 mt-4 d-flex justify-content-center">
                <Link to="/pwa/anmelden" relative="path"></Link>
                    {/* <a href="/pwa/anmelden" onClick={()=> navigate("/pwa/anmelden", {replace:true})} className="btn btn-primary active" aria-current="page">Anmelden</a> */}
                    <a href="/pwa/registrieren" className="btn btn-primary">Jetzt Registrieren</a>
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
                <a className="navbar-brand mt-5" href="/pwa/PasswordErsetzen">Password vergessen?</a>
            </div>
        </Fragment>
    );
}
export default Anmelden;