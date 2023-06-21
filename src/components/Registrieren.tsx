import { Fragment } from "react";
import { useState } from 'react';
import Navbar from "./Navbar";
import { Link, useNavigate } from 'react-router-dom'
import Toggler from "./Toggler";
import Anmelden from "./Anmelden";
function Registrieren() {
    const [togglerVisible, setTogglerVisibility] = useState(false);

    return (
        <Fragment>
            <div className="m-3 column-gap-3 z-n1 position-absolute p-5 rounded-3">
                <Navbar click={() => setTogglerVisibility(true)} />
                {togglerVisible && <Toggler click={() => setTogglerVisibility(false)} />}
                <div className="btn-group p-5 mt-4 d-flex justify-content-center">
                    <Link to="/pwa/anmelden" relative="path" className="btn btn-primary" aria-current="page" onClick={() => { <Anmelden /> }}>Anmelden</Link>
                    <Link to="/pwa/registrieren" relative="path" className="btn btn-primary active" aria-current="page" onClick={() => { <Registrieren /> }}>Jetzt Registrieren</Link>
                </div>
                <div className="mb-4">
                    <label className="form-label">Welche Rolle haben Sie bei mediMESH?</label>
                    <select className="form-select" aria-label="Default select example">
                        <option selected>Wählen Sie Ihre Rolle aus</option>
                        <option value="1">User</option>
                        <option value="2">Staff</option>
                        <option value="3">Content-Creator</option>
                        <option value="4">Moderator</option>
                        <option value="5">Consent-Manager</option>
                        <option value="6">Admin</option>
                    </select>
                </div>
                <form className=" gt-3 ">
                    <div className="mb-3 ">
                        <label className="form-label">Was ist ihr mediMESH Name?</label>
                        <input placeholder="mediMESH Name" className="form-control" />
                    </div>
                    <div className="mb-3 ">
                        <label className="form-label">Email-Adress eingeben</label>
                        <input placeholder="Email-Adress" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password erstellen</label>
                        <input placeholder="Password" type="password" className="form-control" id="exampleInputPassword1" />
                    </div>

                    <button type="submit" className="btn btn-primary">Jetzt Registrieren</button>
                </form>
            </div>
        </Fragment>
    );
}
export default Registrieren;