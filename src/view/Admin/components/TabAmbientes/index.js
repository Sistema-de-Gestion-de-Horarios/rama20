import React from 'react'
import { useState } from 'react';
import Buscador from '../Buscador';
import Ambiente from './Ambiente';
import "./index.css";
import ListaAmbiente from './ListaAmbiente';


function TabAmbientes() {
   
   const [listAmbiente, setListAmbientes] = useState([]);
  //const [isUpdateIn, setIsUpdateIn] = useState(false);
 

  const newAmbienteHandler =(ambienteName, piso, estado) => {
        setListAmbientes((prevListAmbientes) => {
          return [
             ...prevListAmbientes, 
             {id: Math.trunc(Math.random() * 100), ambienteName, piso, estado} 
          ];
        });
     };

    return (   
        <div className="content"> 
          <Buscador/> <br/><br/>
          <Ambiente  onNewAmbiente= {newAmbienteHandler}/>
          <ListaAmbiente ambientes={listAmbiente}/>
        </div>
    )
}
export default TabAmbientes;