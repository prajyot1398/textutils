import React from 'react';
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

function Navbar(props) {

    return (

        <nav className={`navbar navbar-expand-lg navbar-${props.mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand btn btn-success" to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link ${window.location.pathname === '/' ? "active" : ""}`} aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${window.location.pathname === '/about' ? "active" : ""}`} aria-current="page" to="/about">About</Link>
                        </li>
                    </ul>
                    <div className={`form-check form-switch`} onClick={props.toggleMode}>
                        {/*eslint-disable-next-line*/}
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