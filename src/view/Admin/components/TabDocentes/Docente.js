import React, { useState } from 'react'
const Docente = (props) => {

    const [docenteName, setDocenteName] = useState("");
    const [cargaFloat, setCargaFloat] = useState("");
    const [showSummary, setShowSummary] = useState("");

  
    const docenteNameHandler = (event) => {
        console.log(event.target.value);
        setDocenteName(event.target.value);
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
        props.onNewDocente(docenteName, cargaFloat);
        setDocenteName("");
        setCargaFloat("");

    };

    return (
      <div >{props.children}
             <form onSubmit={submitHandler}>
                 <label> Nombre del docente </label>
                 <input type="text" onChange={docenteNameHandler} value={docenteName} />&nbsp; &nbsp; &nbsp; &nbsp;   
                 <label> Carga Horaria </label>
                 <input type="number" onChange={cargaFloatHandler} value={cargaFloat}/>&nbsp; &nbsp; &nbsp; 
                  <button onClick={props.onClick}> {props.children}Crear </button> <br/><br/><br/>
                  
            </form>
             <table>
                <thead>
                           <tr>
                               <th>N°</th>
                               <th>Nombre de Docente</th>
			                   <th>Cargas Horarias</th>
			                   <th> Operaciones </th>
			        
		                    </tr>
	                    </thead>
        
                     </table>
         
           
           
    </div>
        
    )
};
export default Docente;
