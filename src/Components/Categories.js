import React, { Component } from "react";
import cheese from "../cheese.jpg";

class Categories extends Component {
    render(){
        return (
            <section className="categories">
                <h2>Featured Categories</h2>
                <div className="categories-items">
                    <div className="categories-item">
                        <img src={cheese} />
                        <h3>cheddar cheese</h3>
                    </div>
                    <div className="categories-item">
                        <img src={cheese} />
                        <h3>pizza mozzarella cheese</h3>
                    </div>
                    <div className="categories-item">
                        <img src={cheese} />
                        <h3>flavoured cheese</h3>
                    </div>
                    <div className="categories-item">
                        <img src={cheese} />
                        <h3>swiss cheese</h3>
                    </div>
                    <div className="categories-item">
                        <img src={cheese} />
                        <h3>havarti cheese</h3>
                    </div>
                </div>
                <button className="view-all">View All</button>
            </section>
        )
    }
}

export default Categories 