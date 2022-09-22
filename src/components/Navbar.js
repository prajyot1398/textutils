import PropTypes from 'prop-types'

function Navbar(props) {

    return (

        <nav className={`navbar navbar-expand-lg navbar-${props.mode}`}>
            <div className="container-fluid">
                <a className="navbar-brand btn btn-success" href="/">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                    </ul>
                    <div className={`form-check form-switch`} onClick={props.toggleMode}>
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                    </div>
                    <label className={`text-${props.mode === "light" ? "dark" : "light"}`}>Toggle Dark Mode</label>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;

Navbar.prototype = {
    title : PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title : "Set Title !"
}