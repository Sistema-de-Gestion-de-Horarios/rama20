import React, { useState } from 'react'
import "./index.css";
const Usuario = (props) => {

    const [usuarioEmail, setUsuarioEmail] = useState("");
    const [usuarioPassword, setUsuarioPassword] = useState("");
    const [role, setRole] = useState("");
    const [personaId, setPersonaId] = useState("");
    const [showSummary, setShowSummary] = useState("");

  
    const usuarioEmailHandler = (event) => {
        console.log(event.target.value);
        setUsuarioEmail(event.target.value);
        if (event.target.value !== "") setShowSummary(true);
        else setShowSummary(false);
    };
    const usuarioPasswordHandler = (event) => {
        console.log(event.target.value);
        setUsuarioPassword(event.target.value);
        if (event.target.value !== "") setShowSummary(true);
        else setShowSummary(false);
    };
    const roleHandler = (event) => {
        console.log(event.target.value);
        setRole(event.target.value);
        if (event.target.value !== "") setShowSummary(true);
        else setShowSummary(false);
    };
    const usuarioPerIdHandler = (event) => {
        console.log(event.target.value);
        setPersonaId(event.target.value);
        if (event.target.value !== "") setShowSummary(true);
        else setShowSummary(false);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        props.onNewUsuario(usuarioEmail, usuarioPassword, role);
        setUsuarioEmail("");
        setUsuarioPassword("");
        setRole("");
        
    };

    return (
      <div >{props.children}
             <form onSubmit={submitHandler}>
                <label> Email</label>
                <input type="text" onChange={usuarioEmailHandler} value={usuarioEmail} />&nbsp; &nbsp; &nbsp; &nbsp;   
                <label> Password </label>
                <input type="text" onChange={usuarioPasswordHandler} value={usuarioPassword}/>&nbsp; &nbsp; &nbsp;  
                <label> Role</label>
                <input type="text" onChange={roleHandler} value={role} />&nbsp; &nbsp; &nbsp; &nbsp; 
                
                
                <button className='btn-guardar' onClick={props.onClick}> {props.children}Crear </button> <br/><br/><br/>
                  
            </form>
          
    </div>
        
    )
};
export default Usuario;
