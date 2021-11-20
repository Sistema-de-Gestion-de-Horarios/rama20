import React, { useState } from 'react'
const Estudiante = (props) => {

    const [estudianteName, setEstudianteName] = useState("");
    const [ru, setRu] = useState("");
    const [showSummary, setShowSummary] = useState("");

  
    const estudianteNameHandler = (event) => {
        console.log(event.target.value);
        setEstudianteName(event.target.value);
        if (event.target.value !== "") setShowSummary(true);
        else setShowSummary(false);
    };
    const ruHandler = (event) => {
        setRu(event.target.value);
        if(event.target.value !== "") setShowSummary(true);
        else setShowSummary(false);
    }
    
    const submitHandler = (event) => {
        event.preventDefault();
        props.onNewEstudiante(estudianteName, ru);
        setEstudianteName("");
        setRu("");
    };

    return (
      <div >{props.children}
             <form onSubmit={submitHandler}>
                 <label>Nombre de Estudiante </label>
                 <input type="text" onChange={estudianteNameHandler} value={estudianteName} />&nbsp; &nbsp; &nbsp; &nbsp;   
                 <label> RU </label>
                 <input type="text" onChange={ruHandler} value={ru}/>&nbsp; &nbsp; &nbsp;  
                <button onClick={props.onClick}> {props.children}Crear </button> <br/><br/><br/>  
            </form>
             <table>
                <thead>
                           <tr>
                               <th>ID</th>
                               <th>Nombre del Estudiante</th>
			                   <th>RU</th>
			                   <th> Operaciones </th>
		                    </tr>
	                    </thead>
                     </table>
    </div> 
    )
};
export default Estudiante;
