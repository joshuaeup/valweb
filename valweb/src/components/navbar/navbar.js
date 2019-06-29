import React from "react";
require ("./navbar.css");

const navbar = () => {
    return (
    // <nav className="navbar navbar-expand-lg fixed-top" id="navbar">
    //     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <div className="collapse navbar-collapse fixed-top d-flex justify-content-center" id="navbarTogglerDemo01">
    //       <div className="float-right" id="rightNav">
    //         <button className="navBtn btn btn-outline-danger my-2 my-sm-0" type="submit">Music</button>
    //         <button className="navBtn btn btn-outline-danger my-2 my-sm-0" type="submit">Portfolio</button>
    //         <button className="navBtn btn btn-outline-danger my-2 my-sm-0" type="submit">Home</button>
    //         <button className="navBtn btn btn-outline-danger my-2 my-sm-0" type="submit">About</button>
    //         <button className="navBtn btn btn-outline-danger my-2 my-sm-0" type="submit">Contact</button>
    //       </div>
    //     </div>
    //   </nav>

    // <nav className="navbar navbar-expand-lg fixedTop" id="navbar">
    //     <a className="navbar-brand" href="#">Logo</a>
    //     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    //         <span className="navbar-toggler-icon"></span>B
    //     </button>
    //     <div className="collapse navbar-collapse fixed-top" id="navbarTogglerDemo01">
    //        <div className="d-flex justify-content-center" id="centerNav">
    //          <button className="navBtn btn btn-outline-danger my-2 my-sm-0" type="submit">Music</button>
    //          <button className="navBtn btn btn-outline-danger my-2 my-sm-0" type="submit">Portfolio</button>
    //          <button className="navBtn btn btn-outline-danger my-2 my-sm-0" type="submit">Home</button>
    //          <button className="navBtn btn btn-outline-danger my-2 my-sm-0" type="submit">About</button>
    //          <button className="navBtn btn btn-outline-danger my-2 my-sm-0" type="submit">Contact</button>
    //        </div>
    //      </div>
    // </nav>

    <nav className="navbar navbar-expand-lg fixed-top">
        {/* <a className="navbar-brand" href="#">Navbar</a> */}
        <button id="toggleBtn" className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <i className="fas fa-bars" id="textWhite"></i>
        </button>
        <div className="collapse navbar-collapse maxWidth justify-content-center " id="navbarNavDropdown">
            {/* <button className="navBtn btn btn-outline-danger my-2 my-sm-0" type="submit">Music</button>
            <button className="navBtn btn btn-outline-danger my-2 my-sm-0" type="submit">Portfolio</button>
            <button className="navBtn btn btn-outline-danger my-2 my-sm-0" type="submit">Home</button>
            <button className="navBtn btn btn-outline-danger my-2 my-sm-0" type="submit">About</button> */}
            
            <ul className="navbar-nav">
                <li className="nav-item customNavItem">
                    <button className="navBtn btn btn-outline-danger my-2 my-sm-0" type="submit">Music</button>     
                </li>
                <li className="nav-item customNavItem">
                    <button className="navBtn btn btn-outline-danger my-2 my-sm-0" type="submit">Home</button>                     
                </li>
                <li className="nav-item customNavItem">
                    <button className="navBtn btn btn-outline-danger my-2 my-sm-0" type="submit">About</button>                     
                </li>
                <li className="nav-item customNavItem">
                    <button className="navBtn btn btn-outline-danger my-2 my-sm-0" type="submit">Contact</button>                
                </li>
            </ul>
        </div>
    </nav>
    )
}

export default navbar;