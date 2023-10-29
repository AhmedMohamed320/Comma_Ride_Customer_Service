import React from "react";
import classes from "./Search.module.css";
import { BiSearchAlt } from "react-icons/bi";

const Search = (props) => {
    return (
        <div className={classes.input}>
            <input type="search" placeholder={props.placeholder}/>
            <BiSearchAlt className="text-4xl text-gray-400 ml-2" />
        </div>
    );
};

export default Search;
