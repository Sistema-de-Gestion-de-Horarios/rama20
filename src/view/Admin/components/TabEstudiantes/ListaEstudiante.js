import React from "react"; 
import "./index.css";
 
const ListaEstudiante = (props) => {
    return (
        <div>
           {props.estudiantes.map((est) => {
              return( 
                <div key={est.id}>
                   <table>
                        <tbody>	
	                     	<tr>
                                <td> {est.id} </td>
                                <td> {est.estudianteName}</td>
                                <td> {est.ru}</td>
                                <td> 
                                    <i className="el-icon-edit"></i>
                                    <a href="{#}" onClick={()=>this.est.id}> {props.children}Editar</a>|
                                    <i className="el-icon-delete"></i> 
                                    <a href="{#}"onClick={props.onClick}> {props.children}Eliminar</a>|
                                    <a href="{#}" onClick={props.onClick}> {props.children}VerEstudiante</a>|

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
export default ListaEstudiante;