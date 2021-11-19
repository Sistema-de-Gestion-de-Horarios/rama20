import React from 'react'
import { useState } from 'react';
import Buscador from '../Buscador';
import Materia from './Materia';
import "./index.css";
import ListaMateria from './ListaMateria';


function TabMaterias() {
   
   const [listMateria, setListMaterias] = useState([]);
  //const [isUpdateIn, setIsUpdateIn] = useState(false);
 

  const newMateriaHandler =(materiaName, sigla) => {
        setListMaterias((prevListMaterias) => {
          return [
             ...prevListMaterias, 
             {id: Math.trunc(Math.random() * 100), materiaName, sigla} 
          ];
        });
     };

    return (   
        <div className="content"> 
          <Buscador/> <br/><br/>
          <Materia  onNewMateria= {newMateriaHandler}/>
          <ListaMateria materias={listMateria}/>
        </div>
    )
}
export default TabMaterias;