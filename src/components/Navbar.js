import PropTypes from 'prop-types'
//import { useState } from 'react';


function Navbar(props) {

    // const [modeText, setModeText] = useState("Enable White Mode")
    
    // const changeColorMode = () => {
    //     if(modeText === "Enable White Mode") {
    //         setModeText("Enable Dark Mode");
    //         Common.changeColorMode("Enable White Mode");
    //     } else {
    //         setModeText("Enable White Mode");
    //         Common.changeColorMode("Enable Dark Mode");
    //     }
    // }

    return (
        // <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <nav className="navbar navbar-expand-lg navbar-dark">
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
                    {/* <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-success" type="submit">Search</button>
                    </form> */}
                    {/* <button onClick={changeColorMode} className="d-flex btn btn-outline-success">{modeText}</button> */}
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