import React from "react"; 

import "./index.css";
 

const ListaDocente = (props) => {
    return (
        <div>
           {props.docentes.map((doce) => {
              return( 
                <div key={doce.id}>
                   <table>
                        <tbody>	
	                     	<tr>
                                <td> {doce.id} </td>
                                <td> {doce.docenteName}</td>
                                <td> {doce.cargaFloat}</td>
                                <td> 
                                    <i className="el-icon-edit"></i>
                                    <a href="/view/Admin/components/TabDocentes/ActualizarDocente" onClick={()=>this.doce.id}> {props.children}Editar</a>
                                    <i className="el-icon-delete"></i> 
                                    <a href="{#}"onClick={props.onClick}> {props.children}Eliminar</a>
                                    <a href="{#}" onClick={props.onClick}> {props.children}VerMateria</a>

                                </td>    
                            
                           </tr>
                        
	                    </tbody>
            
                     </table>
                </div>
              );
         })}
        </div>
     );
}
export default ListaDocente;