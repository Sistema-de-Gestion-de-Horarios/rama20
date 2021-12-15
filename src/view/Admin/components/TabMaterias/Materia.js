import React, { useState } from 'react'
const Materia = (props) => {

    const [materiaName, setMateriaName] = useState("");
    const [materiaSigla, setMateriaSigla] = useState("");
    const [materiaSemestre, setMateriaSemestre] = useState("");
    const [materiaGrupo, setMateriaGrupo] = useState("");
    const [showSummary, setShowSummary] = useState("");

  
    const materiaNameHandler = (event) => {
        setMateriaName(event.target.value);
        if(event.target.value !== "") setShowSummary(true);
        else setShowSummary(false);
    };
    const materiaSiglaHandler = (event) => {
        setMateriaSigla(event.target.value);
        if (event.target.value !== "") setShowSummary(true);
        else setShowSummary(false);
    };
    const materiaSemestreHandler = (event) => {
        setMateriaSemestre(event.target.value);
        if(event.target.value !== "") setShowSummary(true);
        else setShowSummary(false);
    };
    const materiaGrupoHandler = (event) => {
        setMateriaGrupo(event.target.value);
        if(event.target.value !== "") setShowSummary(true);
        else setShowSummary(false);
    }


    const submitHandler = (event) => {
        event.preventDefault();
        props.onNewMateria(materiaName, materiaSigla, materiaSemestre, materiaGrupo);
        setMateriaName("");
        setMateriaSigla("");
        setMateriaSemestre("");
        setMateriaGrupo("");
    };

    return (
      <div >{props.children}
             <form onSubmit={submitHandler}>
                 <label> Nombre </label>
                 <input type="text" onChange={materiaNameHandler} value={materiaName}/>&nbsp; &nbsp; &nbsp; 
                 <label>Sigla </label>
                 <input type="text" onChange={materiaSiglaHandler} value={materiaSigla} />&nbsp; &nbsp; &nbsp; &nbsp;   
                 <label> Semestre </label>
                 <input type="number" onChange={materiaSemestreHandler} value={materiaSemestre}/>&nbsp; &nbsp; &nbsp; 
                 <label> Grupo </label>
                 <input type="number" onChange={materiaGrupoHandler} value={materiaGrupo}/>&nbsp; &nbsp; &nbsp; 
                  <button onClick={props.onClick}> {props.children}Crear </button> <br/><br/><br/>
                  
            </form>

    </div> 
    )
};
export default Materia;
