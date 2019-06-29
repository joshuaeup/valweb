import React from "react";
import Navbar from "../../components/navbar";
import Banner from "../../components/banner";
import Grid from "../../components/grid";
require ("./home.css");

class home extends React.Component {
    constructor(props) {
    super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div id="homeMainContainer" className="container-fluid">
                <Navbar />
                <Banner />
                <Grid />
            </div>
        )
    }
}

export default home;