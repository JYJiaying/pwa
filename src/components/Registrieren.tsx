import { Fragment } from "react";
import { useState } from 'react';
import Navbar from "./Navbar";
import Toggler from "./Toggler";
function Registrieren() {
    const [togglerVisible, setTogglerVisibility] = useState(false);

    return (
        <Fragment>
            <div className="m-3 column-gap-3">
                <Navbar click={() => setTogglerVisibility(!togglerVisible)} />
                {togglerVisible && <Toggler click={() => setTogglerVisibility(false)} />}
                <div className="btn-group p-5 mt-4 d-flex justify-content-center">
                    <a href="/pwa/Anmelden" className="btn btn-primary " aria-current="page">Anmelden</a>
                    <a href="/pwa/Registrieren/" className="btn btn-primary active">Jetzt Registrieren</a>
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