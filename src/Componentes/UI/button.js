import React from "react";
import "./button.css";

const button = (props) => {
    return (
        <button className="custom" onClick={props.onClick}>
            {props.children}
        </button>
        );
};
export default button;