import React, { Component } from "react";
import MainNav from "./mainNav";
import Header from "./header";


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div className="container">
                <MainNav />
                <Header />
            </div>
        )
    }
}


export default Main