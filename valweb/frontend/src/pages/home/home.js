import React from "react";
import Navbar from "../../components/navbar";
import Banner from "../../components/banner";
import Grid from "../../components/grid";
import Bio from "../../components/bio"
import Contact from "../../components/contact";
import Footer from "../../components/footer";
require ("./home.css");

class home extends React.Component {
    constructor(props) {
    super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div id="homeMainContainer" className="container-fluid" data-spy="scroll" data-target="#list-example" data-offset="0">
                <Navbar />
                <Banner />
                <Grid />
                <Bio />
                <Contact />
                <Footer />
            </div>
        )
    }
}

export default home;