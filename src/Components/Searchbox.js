import React from 'react';
import './Searchbox.css'
const Searchbox = () => {
    return (
        <div className="searchbox">
            <input type="text"
                className="search-input"
                placeholder="search for a movie to nominate here...">
            </input>
        </div>
    )
}

export default Searchbox;