import React from "react"; 
 

const Listadocente = (props) => {
    return (
        <div>
           {props.docentes.map((doce) => (
              <div className="blog-preview" key={doce.id}>
                   <table>
                       <thead>
                           <tr>
                               <th>N°</th>
                               <th>Nombre de Docente</th>
			                   <th>Cargas Horarias</th>
			                   <th> Operaciones </th>
			        
		                    </tr>
	                    </thead>
                        <tbody>	
	                     	<tr>
                                <td> 1 </td>
                                <td> {doce.docenteName}</td>
                                <td> {doce.cargaFloat}</td>
                                <td> Editar|Actualizar|Eliminar|VerMateria </td>
                           </tr>
                        
	                    </tbody>
            
                     </table>
                </div>
           ))}
        </div>
     );
}
export default Listadocente;