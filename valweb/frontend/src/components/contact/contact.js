import React from "react";
import axios from "axios";
import Logo from "../../assets/logo.PNG"
import ContactFormImg from "../../assets/contactFormImg.JPG"

require("./contact.css");


class contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            emailNotSent: true,
            emailSent: false
        }
    }

    handleSubmit(e){
        e.preventDefault();
        const fname = document.getElementById('inputFname').value;
        const lname = document.getElementById('inputLname').value;
        const email = document.getElementById('inputEmail').value;
        const number = document.getElementById('inputNumber').value;
        const message = document.getElementById('inputMessage').value;
        axios({
            method: "POST", 
            url:"http://localhost:3002/send", 
            data: {
                fname: fname,   
                lname: lname,
                email: email,
                number: number,
                message: message  
            }
        }).then((response)=>{
            if (response.data.msg === 'success'){
                this.setState({
                    emailNotSent: false,
                    emailSent: true
                })
                this.resetForm()
            }else if(response.data.msg === 'fail'){
                alert("Message failed to send.");
                
            }
        })
        
    }

    resetForm(){
        // document.getElementById('formMainContainer').reset();
    }


    render() {
        return (
            <div id="contactMainContainer">
            {/* <div className="row contactRow">
                <div className="col-sm-12 col-md-12 col-lg-6 d-flex justify-content-center flex-column">
                <i id="formHome" className="fas fa-home p-2 text-center"></i>
                {this.state.emailNotSent ? (
                    <form id="formMainContainer" onSubmit={this.handleSubmit.bind(this)} method="POST">
                    <div className="form-row">
                        <div className="form-group col-md-6">
                                <label htmlFor="inputFname">First Name</label>
                                <input type="name" className="form-control" id="inputFname" placeholder="First Name" /> 
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="inputLname">Last Name</label>
                                <input type="name" className="form-control" id="inputLname" placeholder="Last Name" />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="inputEmail">Email</label>
                                <input type="email" className="form-control" id="inputEmail" placeholder="Email" />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="inputNumber">Number</label>
                                <input type="text" className="form-control" id="inputNumber" placeholder="Number" />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-sm-12 col-md-12 col-lg-12">
                                <textarea type="text" className="form-control" id="inputMessage" placeholder="Any questions for us?" rows="3"/>
                            </div>
                        </div>
                        <div className="form-row">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>  
                    </form>
                    ) : null}
                    {this.state.emailSent ? (
                        <div>
                            <i id="checkIcon" className="fas fa-check-circle"></i>
                            <h1 className="text-center">Submitted</h1>
                        </div>
                    ) : null}
                </div>
                <div className="col-sm-12 col-md-12 col-lg-6">
                    <iframe title="map" src="https://snazzymaps.com/embed/27427" width="100%" height="600px"></iframe>
                </div>
            </div> */}

<div id="contactRow" className="row" data-aos="zoom-in" data-aos-anchor-placement="top-bottom">
                  <div className="col-sm-12 col-m-6 col-lg-6 contactCol">
                  <div id="contactLogoContentOnImg">
                    <img className="mx-auto d-block" id="contactBannerImg" alt="banner" src={Logo} />
                    </div>
                    <div id="contactContentOnImg">
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <i className="fas fa-phone contentOnImgIcon"></i><p className="contentOnImgTitle">Lets Talk</p>
                            <p className="contentOnImgText">+1 (980) 365-1799</p>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <i className="fas fa-envelope contentOnImgIcon"></i><p className="contentOnImgTitle">Email</p>
                            <p className="contentOnImgText">joshuaeup@gmail.com</p>
                        </div>
                    </div>
                    </div>
                    <img id="contactPageImg" alt="Contact" src={ContactFormImg} />
                  </div>
                  <div className="col-sm-12 col-m-6 col-lg-6 contactColForm">
                    <form id="mainFormContainer" onSubmit={this.handleSubmit.bind(this)} method="POST">
                      <div className="row customFormRow d-flex justify-content-center">
                        <h1 id="formTitle" className="text-center">Send Me A Message</h1>
                        <div className="formFieldContainer row">
                          <label className="col-sm-12 col-md-12 col-lg-12 formLabel formFields">Enter your name *</label>
                          <div className="col-sm-6 col-md-6 col-lg-6 formInputContainer">
                            <input id="inputFname" type="text" className="formFields" placeholder="First name" />
                          </div>
                          <div className="col-sm-6 col-md-6 col-lg-6 formInputContainer">
                            <input id="inputLname" type="text" className="formFields" placeholder="Last name" />
                          </div>
                        </div>
                        <div className="formFieldContainer row">
                          <label className="col-sm-12 col-md-12 col-lg-12 formLabel formFields">Enter your email *</label>
                          <div className="col-sm-12 col-md-12 col-lg-12 formInputContainer">
                            <input id="inputEmail" type="email" className="formFields" placeholder="Eg. example@email.com" />
                          </div>
                        </div>
                        <div className="formFieldContainer row">
                          <label className="col-sm-12 col-md-12 col-lg-12 formLabel formFields">Enter phone number</label>
                          <div className="col-sm-12 col-md-12 col-lg-12 formInputContainer">
                            <input id="inputNumber" type="tel" className="formFields" placeholder="Eg. +1 800 0000000" />
                          </div>
                        </div>
                        <div className="formFieldContainer row">
                          <label className="col-sm-12 col-md-12 col-lg-12 formLabel formFields">Message *</label>
                          <div className="col-sm-12 col-md-12 col-lg-12 formInputContainer">
                            <textarea id="inputMessage" rows="4" type="message" className="formFields" placeholder="Write a message" />
                          </div>
                        </div>
                        <div className="formFieldContainer row d-flex justify-content-center">
                          <button type="submit" id="formSubmitBtn" className="btn-primary">Send Message</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
        </div>
        )
    }


}




export default contact;