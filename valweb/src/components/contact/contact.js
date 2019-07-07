import React from "react";
import profileImg from "../../assets/profileImg.JPG"

require("./contact.css");


const contact = () => {
    return (
        <div id="bioMainContainer">
            <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-6 d-flex justify-content-center flex-column">
                <i id="formHome" className="fas fa-home p-2 text-center"></i>
                    <form id="formMainContainer p-2">
                        <div className="form-row">
                            <div className="form-group col-md-6">
                            <label htmlFor="inputEmail4">Email</label>
                            <input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
                            </div>
                            <div className="form-group col-md-6">
                            <label htmlFor="inputPassword4">Phone Number</label>
                            <input type="phone" className="form-control" id="inputPassword4" placeholder="Number" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputAddress">Address</label>
                            <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                            <label htmlFor="inputCity">City</label>
                            <input type="text" className="form-control" id="inputCity" />
                            </div>
                            <div className="form-group col-md-4">
                            <label htmlFor="inputState">State</label>
                            <input type="text" className="form-control" id="inputState" />
                            </div>
                            <div className="form-group col-md-2">
                            <label htmlFor="inputZip">Zip</label>
                            <input type="text" className="form-control" id="inputZip" />
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-6">
                    <iframe src="https://snazzymaps.com/embed/27427" width="100%" height="600px"></iframe>
                </div>
            </div>
        </div>
    )
}

export default contact;