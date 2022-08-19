import React from "react";

function SearchBar() {
    return (
        <div className="searchbar">
            <input type="text" className="textbox" placeholder="Search Products" />
            <input type="submit" className="submit-button" value="" />
        </div>
    )
}

export default SearchBar