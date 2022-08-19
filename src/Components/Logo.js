import React, { Component } from "react";
import logo from "../Saputo_logo.png";

class Logo extends Component {
    render() {
        return <a href=""><img src={logo} className="logo" alt="logo" /></a>
    }
}

export default Logo;