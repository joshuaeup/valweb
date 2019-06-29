import React from "react";
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
                        <img className="mx-auto d-block" id="bannerImg" alt="banner" src="https://clipart.info/images/ccovers/1516943362Superman-Logo-PNG-HD-Transparent-Background.png" />
                    </div>
                    <div className="bannerTextContainer d-flex p-2">
                        <p id="bannertext" className="text-center">This is blank text that will be changed at a later time</p>
                    </div>
                    <div className="bannerButtonContainer d-flex p-2 d-flex justify-content-center">
                        <button id="bannerBtn" type="button" className="btn btn-outline-primary">Contact Us</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default banner;