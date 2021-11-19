
import React from 'react'
import { useState } from 'react';
import Buscador from '../Buscador';
import Docente from './Docente';
import "./index.css";
import ListaDocente from './Listadocente';


function TabDocentes() {
   
   const [listDocente, setListDocentes] = useState([]);
  //const [isUpdateIn, setIsUpdateIn] = useState(false);
 

  const newDocenteHandler =(docenteName, cargaFloat) => {
        setListDocentes((prevListDocentes) => {
          return [
             ...prevListDocentes, 
             {id: Math.trunc(Math.random() * 100), docenteName, cargaFloat} 
          ];
        });
     };
  
  
    

    return (   
        <div className="content"> 
          <Buscador/> <br/><br/>
          <Docente  onNewDocente= {newDocenteHandler}/>
          <ListaDocente docentes={listDocente}/>
        </div>
    )
}
export default TabDocentes;