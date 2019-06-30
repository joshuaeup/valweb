import React from "react";
import profileImg from "../../assets/profileImg.JPG"
require("./bio.css");

const bio = () => {
    return (
        <div id="bioMainContainer">
            <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-5 d-flex justify-content-center flex-column">
                    <img id="bioProfileImg" className="rounded p-2 "  alt="Profile" src={profileImg} />
                    <p id="bioTitle" className="p-2">Valerie Belton</p>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-7">
                    <p id="bioTitle">Biography</p>
                    <p id="bioText">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                    </p>
                    <div className="bioContactBtnContainer">
                        <button className="btn btn-primary rounded bioContactBtn">Contact</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default bio;