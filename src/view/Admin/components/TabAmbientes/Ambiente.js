import React, { useState } from 'react'
const Ambiente = (props) => {

    const [ambienteName, setAmbienteName] = useState("");
    const [piso, setPiso] = useState("");
    const [estado, setEstado] = useState("");
    const [showSummary, setShowSummary] = useState("");

  
    const ambienteNameHandler = (event) => {
        console.log(event.target.value);
        setAmbienteName(event.target.value);
        if (event.target.value !== "") setShowSummary(true);
        else setShowSummary(false);
    };
    const pisoHandler = (event) => {
        setPiso(event.target.value);
        if(event.target.value !== "") setShowSummary(true);
        else setShowSummary(false);
    }
    const estadoHandler = (event) => {
        setEstado(event.target.value);
        if(event.target.value !== "") setShowSummary(true);
        else setShowSummary(false);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        props.onNewAmbiente(ambienteName, piso, estado);
        setAmbienteName("");
        setPiso("");
        setEstado("");
    };

    return (
      <div >{props.children}
             <form onSubmit={submitHandler}>
                 <label>Número del Ambiente </label>
                 <input type="text" onChange={ambienteNameHandler} value={ambienteName} />&nbsp; &nbsp; &nbsp; &nbsp;   
                 <label> Piso </label>
                 <input type="text" onChange={pisoHandler} value={piso}/>&nbsp; &nbsp; &nbsp; 
                 <label>Estado de Disponibilidad </label>
                 <input type="text" onChange={estadoHandler} value={estado}/>&nbsp; &nbsp; &nbsp; 
                  <button onClick={props.onClick}> {props.children}Crear </button> <br/><br/><br/>
                  
            </form>
             <table>
                <thead>
                           <tr>
                               <th>ID</th>
                               <th>Número de Ambiente o Laboratorio</th>
			                   <th>Piso</th>
                               <th>Estado de Disponibilidad</th>
			                   <th> Operaciones </th>
		                    </tr>
	                    </thead>
                     </table>
    </div> 
    )
};
export default Ambiente;
