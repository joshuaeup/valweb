import React from "react";
import Logo from "../../assets/logo.PNG";
import { Link } from "react-router-dom";

require("./banner.css");

class banner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div id="bannerMainContainer" className="container-fluid d-flex justify-content-center">
                <div className="d-flex justify-content-center flex-column">
                    <div className="bannerImageContainer d-flex p-2">
                        <img className="mx-auto d-block" id="bannerImg" alt="banner" src={Logo} />
                    </div>
                    <div className="bannerTextContainer d-flex p-2">
                        ​<p className="bannerText text-center">We are here to provide professional real estate services where
​clients can enjoy the experience and giving up is not an option.</p>
                    </div>
                    <div className="bannerButtonContainer d-flex p-2 d-flex justify-content-center">
                        <a id="bannerContact" className="mainNavBtn list-group-item list-group-item-action" href="#contactMainContainer">Contact</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default banner;