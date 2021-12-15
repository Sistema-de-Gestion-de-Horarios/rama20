import React from "react"; 
import "./index.css";


const ListaPersona = (props) => {
     const {personas, onDelete} = props;
    return (
        <div>
             <table>
                        <thead>
                           <tr>
                               <th>N°</th>
                               <th>Nombres</th>
			                   <th>Apellidos</th>
                               <th>Tipo</th>
                               <th>Carga Horaria</th>
			                   <th> Operaciones </th>
			        
		                    </tr>
                        </thead>
                        <tbody>
                         {personas.map((persona) => {
                              return( 
                                   <tr key={persona.id}>
                                        <td> {persona._id} </td>
                                        <td> {persona.nombres}</td>
                                        <td> {persona.apellidos}</td>
                                        <td> {persona.tipo}</td>
                                        <td> {persona.cargahoraria}</td>
                                        <td> 
                                             {/* <i className="el-icon-edit"></i>
                                             <a href="/view/Admin/components/TabPersonas/ActualizarPersona" onClick={()=>this._id}> {props.children}Editar</a>
                                             */}
                                             <a onClick={()=>{onDelete(persona)}}><i className="el-icon-delete" ></i> Eliminar</a>
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
export default ListaPersona;