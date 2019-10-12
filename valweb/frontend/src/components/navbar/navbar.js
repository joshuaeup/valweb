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
            <div id="homeResponsiveTopNav" className="d-flex justify-content-center">
                <a className="homeResponsiveTopNavHome justify-content-center align-items-center topNavText" href="#bannerMainContainer">Home</a>   
                <a className="homeResponsiveTopNavGrid justify-content-center align-items-center topNavText" href="#mainGridContainer">Grid</a>
                <a className="homeResponsiveTopNavBio justify-content-center align-items-center topNavText" href="#bioMainContainer">Bio</a> 
                <a className="homeResponsiveTopNavContact justify-content-center align-items-center topNavText" href="#contactMainContainer">Contact</a>
                <a className="homeResponsiveTopNavMoreInfo justify-content-center align-items-center topNavText" href="#mainFooterContainer">More Info</a> 
            </div>
    )}
}

export default navbar;