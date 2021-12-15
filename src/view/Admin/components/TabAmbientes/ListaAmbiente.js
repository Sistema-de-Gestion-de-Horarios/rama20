import React from "react"; 
// import "./index.css";

const ListaAmbiente = (props) => {
     const {ambientes, onDelete, onClick} = props;
    return (
        <div>
             <table>
                        <thead>
                           <tr>
                               <th>N°</th>
                               <th>Número de Ambiente o Laboratorio</th>
                               <th>Piso</th>
			               <th> Operaciones </th>
		                    </tr>
                        </thead>
                        <tbody>
                         {ambientes.map((ambiente) => {
                              return( 
                                   <tr key={ambiente.id}>
                                        <td> {ambiente._id} </td>
                                        <td> {ambiente.numero}</td>
                                        <td> {ambiente.piso}</td>
                                        <td> 
                                             {/* <a onClick={()=>{onClick(ambiente)}}><i className="el-icon-update" /> Actualizar</a> */}
                                             <a onClick={()=>{onDelete(ambiente)}}><i className="el-icon-delete" /> Eliminar</a>
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
export default ListaAmbiente;