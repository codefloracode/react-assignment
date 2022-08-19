import React, { useEffect, useState } from "react";

export const ProductsItem = ({ children, width }) => {
    return (
        <div className="product-item" style={{ width: width }}>
            {children}
        </div>
    )
}

const ProductsCarousel = ({ children } , props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const updateIndex = (newIndex) => {
        if(newIndex < 0) {
            newIndex = React.Children.count(children) -1;
        } else if (newIndex >= React.Children.count(children)) {
            newIndex = 0;
        }
        setActiveIndex(newIndex);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            updateIndex(activeIndex +1);
        }, 5000);
        return () => {
            if(interval) {
                clearInterval(interval);
            }
        }
    })
    return (
        <div className="carousel products">
            <h2>{props.title}</h2>
            <div className="inner-div" 
            style={{ transform: `translateX(-${activeIndex * 100/8}%)`}}>
                {React.Children.map(children, (child, index) => {
                    return React.cloneElement(child, {width: "25%", minWidth: "25%"})
                })}
            </div>
            <div className="arrows">
                <button className="prev"
                onClick={() => {
                    updateIndex(activeIndex - 1);
                }}>
                    Prev
                </button>
                <button className="next"
                onClick={() => {
                    updateIndex(activeIndex + 1);
                }}>
                    Next
                </button>
                
            </div>
        </div>
    )
}

export default ProductsCarousel;