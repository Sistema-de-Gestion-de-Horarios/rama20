import React, {useContext} from "react";
import button from "../UI/button";
import "./Nave.css";
import AuthContext from "../store/auth-context";

const Nave = (props) => {
    const ctx = useContext(AuthContext);
    return (
        <nav className="navbar">
            <section className="links">
                <button onClick={ctx.onLogout} onLogin={props.onLogin}>
                    Logout
                </button>
            </section>
            
        </nav>
    );
};

export default Nave;
 
