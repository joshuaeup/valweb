import React from "react";
require("./grid.css")

const grid = () => {
    return (   
        <div className="mainGridContainer">
        <div className="row d-flex justify-content-center">
            <div className="col-sm-4 col-md-4 col-lg-4">
                <div className="card bg-dark text-white d-flex justify-content-center flex-column customOuterGrid ">
                    <img className="card-img" src="https://www.washingtonpost.com/resizer/Zwr8hLzf4l5uXnhLnv6qR5P0UDI=/480x0/arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/O6V76772TE5KVLLC7ZNLPF4ZV4.jpg" alt="Card image" />
                    <div className="card-img-overlay customGridColLeft ">
                        <h5 className="card-title p-2 customCardTitle">Card title</h5>
                        <button className="btn btn-primary rounded p-2">Learn More</button>
                    </div>
                    <div id="overlayLeft"></div>
                </div>
            </div>
            <div className="col-sm-4 col-md-4 col-lg-4">
                <div className="card bg-dark text-white d-flex justify-content-center flex-column customOuterGrid ">
                    <img className="card-img" src="https://www.washingtonpost.com/resizer/Zwr8hLzf4l5uXnhLnv6qR5P0UDI=/480x0/arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/O6V76772TE5KVLLC7ZNLPF4ZV4.jpg" alt="Card image" />
                    <div className="card-img-overlay customGridColMiddle">
                        <h5 className="card-title p-2">Card title</h5>
                        <button className="btn btn-primary rounded p-2">Learn More</button>
                    </div>
                    <div id="overlayMiddle"></div>
                    </div> 
                </div>
            <div className="col-sm-4 col-md-4 col-lg-4">
                <div className="card bg-dark text-white d-flex justify-content-center flex-column customOuterGrid ">
                    <img className="card-img" src="https://www.washingtonpost.com/resizer/Zwr8hLzf4l5uXnhLnv6qR5P0UDI=/480x0/arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/O6V76772TE5KVLLC7ZNLPF4ZV4.jpg" alt="Card image" />
                    <div className="card-img-overlay customGridColRight">
                        <h5 className="card-title p-2">Card title</h5>
                        <button className="btn btn-primary rounded p-2">Learn More</button>
                    </div>
                    <div id="overlayRight"></div>
                </div>
            </div> 
        </div>
        </div>
    )
}

export default grid; 