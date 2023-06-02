interface TogglerProps{
    click:() => void;
}
function Toggler({click}:TogglerProps) {
    return (
        <nav className="navbar bg-body-tertiary fixed-top">

            <div className="container-fluid">

                <div className="offcanvas-end" tabIndex={-1} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">

                    <div className="offcanvas-header"  onClick= {click}>
                    <a className="navbar-brand" href="/pwa/">mediMESH</a>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" ></button>
                    </div>

                        <nav className="nav flex-column p-2 m-2">
                            <a className="nav-link btn-primary" href="/pwa/Anmelden">Anmelden</a>
                            <a className="nav-link btn-primary" href="/">Einstellungen</a>
                        </nav>
                    
                </div>

            </div>
        </nav>
    );
}
export default Toggler;