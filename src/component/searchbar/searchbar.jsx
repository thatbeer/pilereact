import React from "react";
import 'searchbar.css'

export const Searchbar = ({ onChange}) => {
    return (
        <input
            className="search"
            type="text"
            onChange={onChange}
            placeholder="Search by title..."  
        />
    );
};