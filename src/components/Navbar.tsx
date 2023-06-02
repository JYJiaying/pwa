import { Fragment } from "react";
interface NavbarProps {
    click: () => void;
}
function Navbar({click}: NavbarProps) {
    return (
        <Fragment>
            
            <nav className="navbar bg-body-tertiary fixed-top p-2 " tabIndex={0} >
                <a className="navbar-brand" href="/pwa/index.html/">mediMESH</a>
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
