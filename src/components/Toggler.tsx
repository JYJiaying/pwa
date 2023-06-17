import { Link } from 'react-router-dom'
import Anmelden from './Anmelden';
import App from '../App';

interface TogglerProps {
    click: () => void;
}
function Toggler({ click }: TogglerProps) {

    return (
        <nav className="navbar bg-body-tertiary fixed-top">
            <div className="container-fluid">
                <div className="offcanvas-end" tabIndex={-1} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header" onClick={click}>
                        <Link to="/pwa" relative="path" className="nav-link">mediMESH</Link>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" ></button>
                    </div>
                    <nav className="nav flex-column p-2 m-2">
                        <Link to="/pwa/anmelden" relative="path" className="nav-link btn-primary" onClick={() => { <Anmelden /> }}>Anmelden</Link>
                    </nav>
                </div>
            </div>
        </nav>
    );
}
export default Toggler;