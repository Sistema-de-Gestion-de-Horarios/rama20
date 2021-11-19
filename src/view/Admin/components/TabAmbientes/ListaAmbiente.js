import React from "react"; 
import "./index.css";
 
const ListaAmbiente = (props) => {
    return (
        <div>
           {props.ambientes.map((amb) => {
              return( 
                <div key={amb.id}>
                   <table>
                        <tbody>	
	                     	<tr>
                                <td> {amb.id} </td>
                                <td> {amb.ambienteName}</td>
                                <td> {amb.piso}</td>
                                <td> {amb.estado}</td>
                                <td> 
                                    <i className="el-icon-edit"></i>
                                    <a href="{#}" onClick={()=>this.amb.id}> {props.children}Editar</a>|
                                    <i className="el-icon-delete"></i> 
                                    <a href="{#}"onClick={props.onClick}> {props.children}Eliminar</a>|
                                    <a href="{#}" onClick={props.onClick}> {props.children}VerAmbiente</a>|

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
export default ListaAmbiente;