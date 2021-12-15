import React from 'react'
import { useState, useEffect } from 'react';
import Buscador from '../Buscador';
import Persona from './Persona';
import "./index.css";
import ListaPersona from './Listapersona';
import { PersonaResource } from '../../../../api/persona';


function TabPersonas() {
   
   const [listPersona, setListPersonas] = useState([]);
  //const [isUpdateIn, setIsUpdateIn] = useState(false);

  const getListPersonas = () => {
    	PersonaResource.list().then(resp => {
        setListPersonas(() => {
          return resp.serverResponse;
        });
      });
  };
  useEffect(() => {
    getListPersonas();
  }, []);
 

  const newPersonaHandler =(nombres, apellidos, tipo, cargahoraria) => {
    PersonaResource.store({
      nombres: nombres,
      apellidos: apellidos,
      tipo: tipo,
      cargahoraria: cargahoraria
    }).then(resp => {
      getListPersonas();
    });
      
  };
  const onDelete = (persona ) => {
    PersonaResource.delete(persona._id).then(()=>{
      getListPersonas();
    })
  }
    return (   
        <div className="content"> 
          <Buscador/> <br/><br/>
          <Persona  onNewPersona= {newPersonaHandler}/>
          <ListaPersona personas={listPersona} onDelete={onDelete}/> 
        </div>
    )
}
export default TabPersonas;