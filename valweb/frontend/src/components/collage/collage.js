import React from "react";
require("./collage.css");

class collage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="collageMainContainer container">
                <div className="row h-100">
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <div className="row column d-flex justify-content-center">
                            <div className="d-flex p-2">
                                <img className="collageImg" alt="test" src="https://www.cologny-tour-carree.ch/application/files/8015/5862/5857/Acc3-new.jpg" />
                            </div>
                            <div className="d-flex p-2">
                                <img className="collageImg" alt="test" src="https://www.cologny-tour-carree.ch/application/files/8015/5862/5857/Acc3-new.jpg" />
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 p-2">
                        <img className="collageImg" alt="test" src="https://www.cologny-tour-carree.ch/application/files/7415/5835/4607/2_-_CorCam002_-_3400X4000-final.jpg" />
                    </div>
                </div>
            </div>
        )
    }
}

export default collage;