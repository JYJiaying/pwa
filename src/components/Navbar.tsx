import { Fragment } from "react";
import { Link } from 'react-router-dom'
import App from '../App';

interface NavbarProps {
    click: () => void;
}
function Navbar({ click }: NavbarProps) {
    return (
        <Fragment>
            <nav className="navbar bg-body-tertiary fixed-top p-2 " tabIndex={0} >
                <Link to="/pwa" relative="path" className="nav-link" onClick={() => { <App /> }}>mediMESH</Link>
                <button className="btn"
                    type="button"
                    onClick={click}>
                    <span className="navbar-toggler-icon"></span>
                </button>
            </nav>
        </Fragment>
    );
}
export default Navbar;
