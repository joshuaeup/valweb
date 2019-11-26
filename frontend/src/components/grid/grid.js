import React from "react";
require("./grid.css")

const grid = () => {
    return (   
        <div id="mainGridContainer">
            <div className="customRow row d-flex justify-content-between">
                <div className="col-4 customColLeft ">
                    <div className="text-white d-flex justify-content-center customOuterGrid ">
                        {/* <img className="card-img customCardImg" src="https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Card" /> */}
                        <div className="card-img-overlay customGridColLeft customGridColLeftHover">
                            <h5 className="card-title p-2 customCardTitle">For Buyers</h5>
                            <a className="mainGridBtn list-group-item list-group-item-action btn btn-primary" role="button" href="https://www.realtor.com">Select</a>     
                        </div>
                        <div id="overlayLeft"></div>
                    </div>
                </div>
                <div className="col-4 customColMid ">
                    <div className="text-white d-flex justify-content-center customOuterGrid ">
                        {/* <img className="card-img customCardImg" src="https://images.pexels.com/photos/2227832/pexels-photo-2227832.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Card" /> */}
                        <div className="card-img-overlay customGridColMiddle customGridColMiddleHover">
                            <h5 className="card-title p-2 customCardTitle">For Sellers</h5>
                            <a className="mainGridBtn list-group-item list-group-item-action btn btn-primary" role="button" href="#contactMainContainer">Select</a>     

                        </div>
                        <div id="overlayMiddle"></div>
                    </div> 
                </div>
                <div className="col-4 customColRight ">
                    <div className="text-white d-flex justify-content-center customOuterGrid ">
                        {/* <img className="card-img customCardImg" src="https://freshome.com/wp-content/uploads/2014/07/architecture-DesignATAK-living.jpg" alt="Card" /> */}
                        <div className="card-img-overlay customGridColRight customGridColRightHover">
                            <h5 className="card-title p-2 customCardTitle">Mortgage <i className="text-white fas fa-calculator"></i></h5>
                            <a className="mainGridBtn list-group-item list-group-item-action btn btn-primary" role="button" href="#contactMainContainer">Select</a>     
                        </div>
                        <div id="overlayRight"></div>
                    </div>
                </div> 
                {/* <div className="col-sm-12 col-md-4 col-lg-4 customCol">
                    <img className="testImg" alt="test" src="https://www.cologny-tour-carree.ch/application/files/7415/5835/4607/2_-_CorCam002_-_3400X4000-final.jpg" />
                </div>
                <div className="col-sm-12 col-md-8 col-lg-8 customCol">
                    <img className="testImg" alt="test" src="https://www.cologny-tour-carree.ch/application/files/7415/5835/4607/2_-_CorCam002_-_3400X4000-final.jpg" />
                </div> */}
            </div>
            
        </div>
    )
}

export default grid; 