import React from 'react';

const Navbar = () => {
    return (
        <nav className="sw-navbar p-1">
        
        <div className="sw-navbar-logo f-28 py-1 b-1">Swarup<span className="f-10 ml-5px">v1.0</span></div> 

        <div className="sw-navbar-list ml-10px mt-1">
            <div className="sw-navbar-link ">
                <div className="sw-navbar-item sans-serif f-14 mx-5px">Documentation</div>
            </div>
            <div className="sw-navbar-link ">
                <div className="sw-navbar-item sans-serif f-14 mx-5px">Components</div>
            </div>
            <div className="sw-navbar-link">
                <div className="sw-navbar-item sans-serif f-14 mx-5px">Fonts</div>
            </div>
            <div className="sw-navbar-link">
                <div className="sw-navbar-item sans-serif f-14 mx-5px">Spacing</div>
            </div>
            <div className="sw-navbar-link">
                <div className="sw-navbar-item sans-serif f-14 mx-5px">Utilities</div>
            </div>
            <div className="sw-navbar-link">
                <div className="sw-navbar-item sans-serif f-14 mx-5px">About</div>
            </div>
        </div>

        <div className="sw-navbar-list pos-absolute right">
            <div className="sw-navbar-link">
                <div className="sw-navbar-item sans-serif f-14 mx-5px">
                    <button className="sw-btn sw-btn-invert">
                        Download
                    </button>
                </div>
            </div>
        </div>

    </nav>
    )
}

export default Navbar;