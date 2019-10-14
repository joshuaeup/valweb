import React from "react";
import profileImg from "../../assets/profileImg.JPG"
require("./bio.css");

class bio extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {
            fadeLeftClass: "arrowFont",
            fadeRightClass: "fadeArrowFont",
            infoArr: [
                {
                    id: 1,
                    title: "​Who are we?",
                    content: "​VRB Realty is owned and operated by Valerie Belton and was established in 2016 with the primary focus being on residential property. As a small firm our goal is to bring back the personal touch, that has been lost in the overall real estate experience. Our motto is to help the client through the buying and/or selling process by simply not giving up when things get hard or challenges arise. These are not just words on a page, it's what we do!"
                },
                {
                    id: 2,
                    title: "Vision Statement",
                    content: "Our vision is to positively impact the lives of our clients with a seamless real estate experience, going above and beyond what's customarily required  to get to the closing finish line, one client at a time."
                },
                {
                    id: 3,
                    title: "Our Leader: Valerie Belton",
                    content: "​I've been a Real Estate Broker since 2007 and from day one I took the position of personalizing each and every real estate transaction. It was immediately clear to me that my clients looked at me as much more then just their Broker and as a result I have gained many new friends.  I am a  member of the National Realtor Association of which I take great pride in. As a member I am held to the highest degree of ethical behavior, which is directly in line with my personal values. My business has been built exclusively on referrals and for me that is the best compliment I can receive."
                }
            ],
            switchValue: 0
        }
        this.handleClickLeft = this.handleClickLeft.bind(this);
        this.handleClickRight = this.handleClickRight.bind(this);

    }

    // increase = () => {
    //     this.setState = {
    //         switchValue: this.state.switchValue + 1
    //     }
    //     console.log(this.state.switchValue)
    // }

    // decrease = () => {
    //     this.setState = {
    //         switchValue: this.state.switchValue - 1
    //     }
    //     console.log(this.state.switchValue)

    // }

    handleClickLeft() {
        console.log("Left")
        console.log(this.state.infoArr.length)
        console.log(this.state.switchValue)
        if (this.state.switchValue >= this.state.infoArr.length - 2) {
            this.setState(prevState => {
                return {switchValue: prevState.switchValue - 1}; 
            })
        } 
        if (this.state.switchValue >= this.state.infoArr.length - 1) {
            this.setState({
                fadeLeftClass: "fadeArrowFont" 
            })
        } else {
            this.setState({
                fadeLeftClass: "arrowFont" 
            })
        }

    }

    handleClickRight() {
        console.log("Right")
        console.log(this.state.infoArr.length)
        console.log(this.state.switchValue)
        if (this.state.switchValue <= this.state.infoArr.length - 2) {
            this.setState(prevState => {
                return {switchValue: prevState.switchValue + 1}; 
            })
        }

        if (this.state.switchValue <= this.state.infoArr.length - 3) {
            this.setState({
                fadeRightClass: "fadeArrowFont",
                fadeLeftClass: "fadeArrowFont"
            }) 
        } else {
            this.setState({
                fadeRightClass: "arrowFont" 
            })
        }
    }

    
    
    render() {
        return (
            <div id="bioMainContainer">
                <div className="row bioRow">
                    <div className="col-sm-12 col-md-12 col-lg-5 d-flex flex-column">
                    <div className="d-flex justify-content-center">
                        <img id="bioProfileImg" className="rounded p-2 "  alt="Profile" src={profileImg} />
                    </div>
                        <p id="bioTitle" className="p-2">Valerie Belton</p>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-7">

                        <p id="bioTitle">{this.state.infoArr[this.state.switchValue].title}</p>
                        <p id="bioText">
                            {this.state.infoArr[this.state.switchValue].content}
                        </p>
                        <div className="bioContactBtnContainer">
                            <div className="d-flex justify-content-center">
                                <div className="row w-100 d-flex justify-content-between">
                                    <i className={`fas fa-arrow-circle-left col-sm-2 col-md-2 col-lg-2 ${this.state.fadeLeftClass}`} onClick={this.handleClickLeft} />
                                    <i className="fas fa-book-open col-sm-2 col-md-2 col-lg-2 bookFont"></i>
                                    <i className={`fas fa-arrow-circle-right col-sm-2 col-md-2 col-lg-2 ${this.state.fadeRightClass}`} onClick={this.handleClickRight}/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6 col-md-6 col-lg-6">
                                    <a className="mainBioBtn list-group-item list-group-item-action btn btn-primary" role="button" data-toggle="modal" data-target=".largeView">Learn More</a> 
                                </div>
                                <div className="col-sm-6 col-md-6 col-lg-6">
                                    <a className="mainBioBtn list-group-item list-group-item-action btn btn-primary" role="button" href="#contactMainContainer">Contact</a>     
                                </div>
                            </div>
                            <div className="modal fade largeView" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-lg">
                                    <div className="modal-content">
                                        <div class="modal-header">
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <img id="AwardTemp" alt="award" src="https://blogs.saphana.com/wp-content/uploads/2015/12/trophy.jpg" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }

}

export default bio;