import React from "react"; 
import "./index.css";

const ListaMateria = (props) => {
     const {materias, onDelete} = props;
    return (
        <div>
             <table>
                        <thead>
                           <tr>
                              <th>N°</th>
                              <th>Nombre</th>
                              <th>Sigla</th>
                              <th>Semestre</th>
                              <th>Grupo</th>
			               <th> Operaciones </th>
		                 </tr>
                        </thead>
                        <tbody>
                         {materias.map((materia) => {
                              return( 
                                   <tr key={materia.id}>
                                        <td> {materia._id} </td>
                                        <td> {materia.nombre}</td>
                                        <td> {materia.sigla}</td>
                                        <td> {materia.semestre}</td>
                                        <td> {materia.grupo}</td>
                                        <td> 
                                             {/* <i className="el-icon-edit"></i>
                                             <a href="/view/Admin/components/TabPersonas/ActualizarPersona" onClick={()=>this._id}> {props.children}Editar</a>
                                             */}
                                             <a onClick={()=>{onDelete(materia)}}><i className="el-icon-delete" ></i> Eliminar</a>
                                             {/* <a href="{#}" onClick={props.onClick}> {props.children}VerPersona</a> */}

                                        </td>    
                                   
                                   </tr>
                              );
                         })}  
         
         </tbody>
            
            </table>
        </div>
     );
}
export default ListaMateria;