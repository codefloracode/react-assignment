import React, { Component } from "react";
import Logo from "./Logo";
import ShoppingCard from "../shopping-card.svg";

class Header extends Component {
    render() {
        return (
            <header>
                <Logo />
                <img src={ShoppingCard} className="shopping-card" alt="shopping-card" />
            </header>
        )
    }
}

export default Header;
