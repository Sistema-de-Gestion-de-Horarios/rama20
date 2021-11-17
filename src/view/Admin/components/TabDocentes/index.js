
import React from 'react'
import { useState } from 'react';
import Docente from './Docente';
//import "./index.css";
import Listadocente from './Listadocente';
//import Index from "./Index"

export default function TabDocentes(props) {
   
   const [docenteList, setDocenteList] = useState([]);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);


    //const [, setDir] = useState("");

    
    const newDocenteHandler =(docenteName, cargaFloat) => {
        setDocenteList((prevDocenteList) => {
          return [
             ...prevDocenteList, 
             {id: Math.trunc(Math.random() * 100), docenteName, cargaFloat} 
          ];
        });
     };

    

    return (
    
        <div className="content"> 
          <Docente  oneNewDocente= {newDocenteHandler}/>
          <Listadocente docentes={docenteList}/>
   </div>
    )
}