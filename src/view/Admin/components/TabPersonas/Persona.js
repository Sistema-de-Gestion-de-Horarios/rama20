import React, { useState } from 'react'
import "./index.css";
const Persona = (props) => {

    const [personaName, setPersonaName] = useState("");
    const [personaApellido, setPersonaApellido] = useState("");
    const [tipo, setTipo] = useState("");
    const [cargaFloat, setCargaFloat] = useState("");
    const [showSummary, setShowSummary] = useState("");

  
    const personaNameHandler = (event) => {
        console.log(event.target.value);
        setPersonaName(event.target.value);
        if (event.target.value !== "") setShowSummary(true);
        else setShowSummary(false);
    };
    const personaApellidoHandler = (event) => {
        console.log(event.target.value);
        setPersonaApellido(event.target.value);
        if (event.target.value !== "") setShowSummary(true);
        else setShowSummary(false);
    };
    const TipoHandler = (event) => {
        console.log(event.target.value);
        setTipo(event.target.value);
        if (event.target.value !== "") setShowSummary(true);
        else setShowSummary(false);
    };
    const cargaFloatHandler = (event) => {
        setCargaFloat(event.target.value);
        if(event.target.value !== "") setShowSummary(true);
        else setShowSummary(false);
    }
    const submitHandler = (event) => {
        event.preventDefault();
        props.onNewPersona(personaName, personaApellido, tipo, cargaFloat);
        setPersonaName("");
        setPersonaApellido("");
        setTipo("");
        setCargaFloat("");

    };

    return (
      <div >{props.children}
             <form onSubmit={submitHandler}>
                <label> Nombres</label>
                <input type="text" onChange={personaNameHandler} value={personaName} />&nbsp; &nbsp; &nbsp; &nbsp;   
                <label> Apellidos </label>
                <input type="text" onChange={personaApellidoHandler} value={personaApellido}/>&nbsp; &nbsp; &nbsp; 
                <label> Tipo</label>
                <input type="text" onChange={TipoHandler} value={tipo} />&nbsp; &nbsp; &nbsp; &nbsp;  
                <label> Carga Horaria</label>
                <input type="text" onChange={cargaFloatHandler} value={cargaFloat}/>&nbsp; &nbsp; &nbsp;  
                <button className='btn-guardar' onClick={props.onClick}> {props.children}Crear </button> <br/><br/><br/>
                  
            </form>
          
    </div>
        
    )
};
export default Persona;
