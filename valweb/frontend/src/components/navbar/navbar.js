import React from "react";
require ("./navbar.css");

const navbar = () => {
    return (
    <nav id="customNav" className="navbar navbar-expand-lg fixed-top" >
        <button id="toggleBtn" className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <i className="fas fa-bars" id="textWhite"></i>
        </button>
        <div className="collapse navbar-collapse maxWidth justify-content-center" id="navbarNavDropdown">
            <ul className="navbar-nav">
                <li className="nav-item customNavItem">
                    <a className="navBtn list-group-item list-group-item-action" type="button" href="#bannerMainContainer">Banner</a>     
                </li>
                <li className="nav-item customNavItem">
                    <a className="navBtn list-group-item list-group-item-action" type="button" href="#mainGridContainer">Grid</a>                     
                </li>
                <li className="nav-item customNavItem">
                    <a className="navBtn list-group-item list-group-item-action" type="button" href="#bioMainContainer">Bio</a>                     
                </li>
                <li className="nav-item customNavItem">
                    <a className="navBtn list-group-item list-group-item-action" type="button" href="#contactMainContainer">Contact</a>                
                </li>
                <li className="nav-item customNavItem">
                    <a className="navBtn list-group-item list-group-item-action" type="button" href="#mainFooterContainer">More Info</a>                
                </li>
                {/* <li className="nav-item customNavItem">
                    <button className="navBtn btn my-2 my-sm-0 " type="submit" href="#mainFooterContainer">More Info</button>              
                </li> */}
            </ul>
        </div>
    </nav>
    )
}

export default navbar;