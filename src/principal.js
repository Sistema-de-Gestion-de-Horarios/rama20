import React from "react";
import "./Principal.css";
import { Link } from "react-router-dom";

const principal = () => {
    return (
        <nav className="navbar">
            <h1>UNIVERDIDAD AUTÓNOMA TOMÁS FRÍAS</h1>
            <section className="links">
                <Link to="./login">Log_in</Link>
            </section>
            <section className="links1">
                <a href="http://www.uatf.edu.bo/">About</a>
            </section>
        </nav>
    );
};

export default principal;