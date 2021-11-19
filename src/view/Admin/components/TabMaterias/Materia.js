import React, { useState } from 'react'
const Materia = (props) => {

    const [materiaName, setMateriaName] = useState("");
    const [sigla, setSigla] = useState("");
    const [showSummary, setShowSummary] = useState("");

  
    const materiaNameHandler = (event) => {
        console.log(event.target.value);
        setMateriaName(event.target.value);
        if (event.target.value !== "") setShowSummary(true);
        else setShowSummary(false);
    };
    const siglaHandler = (event) => {
        setSigla(event.target.value);
        if(event.target.value !== "") setShowSummary(true);
        else setShowSummary(false);
    }


    const submitHandler = (event) => {
        event.preventDefault();
        props.onNewMateria(materiaName, sigla);
        setMateriaName("");
        setSigla("");
    };

    return (
      <div >{props.children}
             <form onSubmit={submitHandler}>
                 <label>Nombre de la Materia </label>
                 <input type="text" onChange={materiaNameHandler} value={materiaName} />&nbsp; &nbsp; &nbsp; &nbsp;   
                 <label> Sigla </label>
                 <input type="text" onChange={siglaHandler} value={sigla}/>&nbsp; &nbsp; &nbsp; 
                  <button onClick={props.onClick}> {props.children}Crear </button> <br/><br/><br/>
                  
            </form>
             <table>
                <thead>
                           <tr>
                               <th>ID</th>
                               <th>Nombre de la Materia</th>
			                   <th>Sigla</th>
			                   <th> Operaciones </th>
		                    </tr>
	                    </thead>
                     </table>
    </div> 
    )
};
export default Materia;
