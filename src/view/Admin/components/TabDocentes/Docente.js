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
        <div>
             <form onSubmit={submitHandler}>
                 <label> Nombre de ldocente </label>
                 <input type="text" onChange={docenteNameHandler} value={docenteName} />
                 <label> Carga Horaria </label>
                 <input type="number" onChange={cargaFloatHandler} value={cargaFloat}/>
                  <br/>
                  <button type="button" onClick={props.onClick} >{props.children}Crear </button> <br/> <br/> 
                  
            </form>
            {showSummary ? (
        <p>la pelicula es  {docenteName}({cargaFloat})) </p>
        ) : (
            <></>
        )}
           
           
            
        </div>
    )
}
export default Docente;
