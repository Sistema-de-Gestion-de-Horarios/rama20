import React, { useState } from 'react'
const Ambiente = (props) => {

    const [ambienteNumero, setAmbienteNumero] = useState("");
    const [ambientePiso, setAmbientePiso] = useState("");
    const [showSummary, setShowSummary] = useState("");

  
    const ambienteNumeroHandler = (event) => {
        console.log(event.target.value);
        setAmbienteNumero(event.target.value);
        if (event.target.value !== "") setShowSummary(true);
        else setShowSummary(false);
    };
    const ambientePisoHandler = (event) => {
        console.log(event.target.value);
        setAmbientePiso(event.target.value);
        if (event.target.value !== "") setShowSummary(true);
        else setShowSummary(false);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        props.onNewAmbiente(ambienteNumero, ambientePiso);
        setAmbienteNumero("");
        setAmbientePiso("");
    };

    return (
      <div >{props.children}
             <form onSubmit={submitHandler}>
                <label> Número</label>
                <input type="text" onChange={ambienteNumeroHandler} value={ambienteNumero} />&nbsp; &nbsp; &nbsp; &nbsp;   
                <label> Piso </label>
                <input type="text" onChange={ambientePisoHandler} value={ambientePiso}/>&nbsp; &nbsp; &nbsp;  
                <button onClick={props.onClick}> {props.children}Crear </button> <br/><br/><br/>
                  
            </form>
          
    </div>
        
    )
};
export default Ambiente;
