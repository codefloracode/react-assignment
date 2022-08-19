import React, { Component } from "react";
import ShoppingCard from "../shopping-card.svg";
import Layers from "../layers.svg";
import Inbox from "../inbox.svg";
import File from "../file.svg";
import Help from "../help.svg";
import Profile from "../profile.svg";

class Sidebar extends Component {
    render() {
        return (
            <section className="sidebar">
                <ul className="buy">
                    <li><a href=""><img src={ShoppingCard} className="sidebar-icon" alt="shopping-card" />shop</a></li>
                    <li><a href=""><img src={Layers} className="sidebar-icon" alt="orders" />orders</a></li>
                    <li><a href=""><img src={Inbox} className="sidebar-icon" alt="quotes" />quotes</a></li>
                    <li><a href=""><img src={File} className="sidebar-icon" alt="invoices" />invoices</a></li>
                    <li><a href=""><img src={Layers} className="sidebar-icon" alt="quick-order" />quick order</a></li>
                    <li className="help"><a href=""><img src={Help} className="sidebar-icon" alt="help" />need help</a></li>
                    <li><a href="">cheesit ink</a></li>
                    <li><a href=""><img src={Profile} className="sidebar-icon" alt="profile" />Roy Nalapeta</a></li>
                </ul>
                <ul className="secondary-menu">
                    <li><a href="">terms and conditions</a></li>
                    <li><a href="">privacy</a></li>
                    <li><a href="">cookie policy</a></li>
                    <li><a href="">accessibility</a></li>
                    <li><a href="">faq's</a></li>
                    <li><a href="">about us</a></li>
                </ul>
                <p className="copyright">© 2019 Object Edge. All rights reserved.</p>
            </section>
        )
    }
}

export default Sidebar;