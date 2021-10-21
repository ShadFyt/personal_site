import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
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
                    <Switch>

                    </Switch>
                </div>

                <Footer />

            </>

        )
    }
}


export default Main