import React, { useState } from 'react'
import Docente from './Docente';
export const ActualizarDocente = () => {
   
   const [listDocente, setListDocentes] = useState([]);
   const [isUpdateIn, setIsUpdateIn] = useState(false); 

   const newDocenteHandler =(docenteName, cargaFloat) => {
       setListDocentes((prevListDocentes) => {
        return [
           ...prevListDocentes, 
           {id: Math.trunc(this.docenteName,this. cargaFloat)} 
        ];
      });
   };
   const storedUpdateInfo = localStorage.getItem("isUpdateIn");
   if (storedUpdateInfo === 1){
      setIsUpdateIn(true);
   }

   const DocenteHandler = (email, password) => {
      console.log("Loging in...")
      localStorage.GetItem("isUpdateIn", 1);
      setIsLoggedIn(true);
   };
   const logoutHandler = () => {
      console.log("logout..");
      console.log(isLoggedIn);
      localStorage.removeItem("isUpdateIn");
      setIsLoggedIn(false);
   }



   return (
      <div>{props.children}
         {props.docentes.map((doce) => {
            return( 
               <div key={doce.id}>

                  <form onSubmit={handlerSubmit}>
                     <label>Docente</label>
                     <input type="text" value={this.doce.docenteName}/>
             
                     <label>Carga Horaria</label>
                     <input type="password" value={this.doce.cargaFloat}/>
                     <button onClick={props.onClick}> {this.props.children}Editar</button>
                 </form>  
               </div>  
            );
         })}   

      </div>
   )
}
