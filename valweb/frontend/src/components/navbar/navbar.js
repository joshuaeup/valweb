import React from "react";
require ("./navbar.css");

class navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({

        })
    }

    
    render() {
        return (
            <nav id="customNav" className="navbar navbar-expand-lg fixed-top" >
                <button id="toggleBtn" className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fas fa-bars" id="textWhite"></i>
                </button>
                <div className="collapse navbar-collapse maxWidth justify-content-center" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="customNavItem">
                            <a className="mainNavBtn list-group-item list-group-item-action" href="#bannerMainContainer">Banner</a>     
                        </li>
                        <li className="customNavItem">
                            <a className="mainNavBtn list-group-item list-group-item-action" href="#mainGridContainer">Grid</a>                     
                        </li>
                        <li className="customNavItem">
                            <a className="mainNavBtn list-group-item list-group-item-action" href="#bioMainContainer">Bio</a>                     
                        </li>
                        <li className="customNavItem">
                            <a className="mainNavBtn list-group-item list-group-item-action" href="#contactMainContainer">Contact</a>                
                        </li>
                        <li className="customNavItem">
                            <a className="mainNavBtn list-group-item list-group-item-action" href="#mainFooterContainer">More Info</a>                
                        </li>
                    </ul>
                </div>
            </nav>
    )}
}

export default navbar;