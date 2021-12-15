import React from "react"; 
import "./index.css";


const ListaUsuario = (props) => {
     const {users, onDelete} = props;
    return (
        <div>
             <table>
                        <thead>
                           <tr className="titulos">
                               <th>N°</th>
                               <th>Email</th>
			                   <th>Password</th>
                                  <th>Role</th>
			                   <th> Operaciones </th>
			        
		                    </tr>
                        </thead>
                        <tbody>
                         {users.map((user) => {
                              return( 
                                   <tr key={user.id}>
                                        <td> {user._id} </td>
                                        <td> {user.email}</td>
                                        <td> {user.password}</td>
                                        <td> {user.role}</td>
                                        <td> 
                                             {/* <i className="el-icon-edit"></i>
                                             <a href="/view/Admin/components/TabPersonas/ActualizarPersona" onClick={()=>this._id}> {props.children}Editar</a>
                                             */}
                                             <a onClick={()=>{onDelete(user)}}><i className="el-icon-delete" ></i> Eliminar</a>
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
export default ListaUsuario;