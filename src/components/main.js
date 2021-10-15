import React, { Component } from "react";
import MainNav from "./mainNav";
import Header from "./header";
import Footer from "./footer";


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <>
                <Header />
                <div className="container">
                    <MainNav />
                </div>
                <Footer />

            </>

        )
    }
}


export default Main