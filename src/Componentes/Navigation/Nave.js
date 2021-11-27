import React, {useContext} from "react";
import button from "../UI/button";
import "./Nave.css";
import { Link } from "react-router-dom";

const Nave = () => {
    return (
        <nav className="navbar">
                <button>
                   <Link to="Pagina">Volver</Link>
                </button>  
        </nav>
    );
};

export default Nave;
 
