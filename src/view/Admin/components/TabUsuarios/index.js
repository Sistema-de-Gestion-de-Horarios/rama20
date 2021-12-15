import React from 'react'
import { useState, useEffect } from 'react';
import Buscador from '../Buscador';
import Usuario from './Usuario';
import "./index.css";
import ListaUsuario from './Listausuario';
import { UserResource } from '../../../../api/user';


function TabUsuarios() {
   
   const [listUsuario, setListUsuarios] = useState([]);
  //const [isUpdateIn, setIsUpdateIn] = useState(false);

  const getListUsuarios = () => {
    	UserResource.list().then(resp => {
        setListUsuarios(() => {
          return resp.serverResponse;
        });
      });
  };
  useEffect(() => {
    getListUsuarios();
  }, []);
 

  const newUsuarioHandler =(email, password, role) => {
    UserResource.store({
      email: email,
      password: password,
      role: role,
      
    }).then(resp => {
      getListUsuarios();
    });
      
  };
  const onDelete = (usuario) => {
    UserResource.delete(usuario._id).then(()=>{
      getListUsuarios();
    })
  }
    return (   
        <div className="content"> 
          <Buscador/> <br/><br/>
          <Usuario  onNewUsuario= {newUsuarioHandler}/>
          <ListaUsuario users={listUsuario} onDelete={onDelete}/> 
        </div>
    )
}
export default TabUsuarios;