
import React from "react";
import propTypes from "prop-types";



export default function Navbar(props) {
    return (
        <>
       
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <div className="container-fluid">
                    <a className={`navbar-brand text-${props.mode==='light'?'dark':'light'}`} href="#">{props.title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" 
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className={`nav-link active text-${props.mode==='light'?'dark':'light'}`} aria-current="page" href ="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link text-${props.mode==='light'?'dark':'light'}`} href="#">{props.aboutText}</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className={`nav-link dropdown-toggle text-${props.mode==='light'?'dark':'light'}`} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Services
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Service 1</a></li>
                                    <li><a className="dropdown-item" href="#">Service 2</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link text-${props.mode==='light'?'dark':'light'}`} href="#">Contact Us</a>
                            </li>
                        </ul>
                        <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                            <input className="form-check-input" onClick= {props.togglemode} type="checkbox" id="flexSwitchCheckDefault"/>
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {props.mode==='light'?'dark':'light'} Mode</label>
                        </div>
                        {/* <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-primary" type="submit">Search</button>
                        </form> */}
                    </div>
                </div>
                
            </nav>
        </>
    )
}

//propTypes:

Navbar.propTypes = {title: propTypes.string.isRequired, //title is required
aboutText:propTypes.string}

//When values are not passed navbar uses default values
Navbar.defaultProps = {title: 'Title Here',
aboutText:'About Text Here'}
