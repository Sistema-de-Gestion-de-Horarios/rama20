import React from "react"; 
import "./index.css";
 
const ListaMateria = (props) => {
    return (
        <div>
           {props.materias.map((mat) => {
              return( 
                <div key={mat.id}>
                   <table>
                        <tbody>	
	                     	<tr>
                                <td> {mat.id} </td>
                                <td> {mat.materiaName}</td>
                                <td> {mat.sigla}</td>
                                <td> 
                                    <i className="el-icon-edit"></i>
                                    <a href="{#}" onClick={()=>this.mat.id}> {props.children}Editar</a>|
                                    <i className="el-icon-delete"></i> 
                                    <a href="{#}"onClick={props.onClick}> {props.children}Eliminar</a>|
                                    <a href="{#}" onClick={props.onClick}> {props.children}VerMateria</a>|

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
export default ListaMateria;