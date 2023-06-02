import { Fragment } from "react";
import { useState } from 'react';
import Navbar from "./Navbar";
import Toggler from "./Toggler";
function Anmelden() {
    const [togglerVisible, setTogglerVisibility] = useState(false);

    return (
        <Fragment>
            <div className="m-3 column-gap-3">
                <Navbar click={() => setTogglerVisibility(!togglerVisible)} />
                {togglerVisible && <Toggler click={() => setTogglerVisibility(false)} />}
                <div className="btn-group p-5 mt-4 d-flex justify-content-center">
                    <a href="/pwa/index.html/Anmelden" className="btn btn-primary active" aria-current="page">Anmelden</a>
                    <a href="/pwa/index.html/Registrieren" className="btn btn-primary">Jetzt Registrieren</a>
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
                <a className="navbar-brand mt-5" href="/pwa/index.html/PasswordErsetzen">Password vergessen?</a>
            </div>
        </Fragment>
    );
}
export default Anmelden;