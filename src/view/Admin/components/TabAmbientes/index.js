import React from 'react'
import { useState, useEffect } from 'react';
import Buscador from '../Buscador';
import Ambiente from './Ambiente';
import "./index.css";
import ListaAmbiente from './ListaAmbiente';
import { AmbienteResource } from '../../../../api/ambiente';


function TabAmbientes() {
   
   const [listAmbiente, setListAmbientes] = useState([]);
  //const [isUpdateIn, setIsUpdateIn] = useState(false);

  const getListAmbientes = () => {
    	AmbienteResource.list().then(resp => {
        setListAmbientes(() => {
          return resp.serverResponse;
        });
      });
  };
  useEffect(() => {
    getListAmbientes();
  }, []);
 

  const newAmbienteHandler =(numero, piso) => {
    AmbienteResource.store({
      numero: numero,
      piso: piso,
    }).then(resp => {
      getListAmbientes();
    });
      
  };
  const onDelete = (ambiente ) => {
    AmbienteResource.delete(ambiente._id).then(()=>{
      getListAmbientes();
    })
  }
    return (   
        <div className="content"> 
          <Buscador/> <br/><br/>
          <Ambiente  onNewAmbiente= {newAmbienteHandler}/>
          <ListaAmbiente ambientes={listAmbiente} onDelete={onDelete}/>

        </div>
    )
}
export default TabAmbientes;