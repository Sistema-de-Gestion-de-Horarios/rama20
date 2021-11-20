import React from 'react'
import { useState } from 'react';
import Buscador from '../Buscador';
import Estudiante from './Estudiante';
import "./index.css";
import ListaEstudiante from './ListaEstudiante';


function TabEstudiantes() {
   
   const [listEstudiante, setListEstudiantes] = useState([]);
  //const [isUpdateIn, setIsUpdateIn] = useState(false);
 

  const newEstudianteHandler =(estudianteName,ru) => {
        setListEstudiantes((prevListEstudiantes) => {
          return [
             ...prevListEstudiantes, 
             {id: Math.trunc(Math.random() * 100), estudianteName, ru} 
          ];
        });
     };
    return (   
        <div className="content"> 
          <Buscador/> <br/><br/>
          <Estudiante  onNewEstudiante= {newEstudianteHandler}/>
          <ListaEstudiante estudiantes={listEstudiante}/>
        </div>
    )
}
export default TabEstudiantes;