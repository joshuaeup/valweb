import React from "react";
import profileImg from "../../assets/profileImg.JPG"
import axios from "axios";

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
            <div className="row">
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
                    <iframe src="https://snazzymaps.com/embed/27427" width="100%" height="600px"></iframe>
                </div>
            </div>
        </div>
        )
    }


}




export default contact;