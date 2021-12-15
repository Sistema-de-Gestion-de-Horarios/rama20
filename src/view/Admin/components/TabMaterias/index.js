import React from 'react';
import { useState, useEffect } from 'react';
import Buscador from '../Buscador';
import Materia from './Materia';
import "./index.css";
import ListaMateria from './ListaMateria';
import { MateriaResource } from '../../../../api/materia';


function TabMaterias() {
   
   const [listMateria, setListMaterias] = useState([]);
  //const [isUpdateIn, setIsUpdateIn] = useState(false);

  const getListMaterias = () => {
    	MateriaResource.list().then(resp => {
        setListMaterias(() => {
          return resp.serverResponse;
        });
      });
  };
  useEffect(() => {
    getListMaterias();
  }, []);
 

  const newMateriaHandler =(nombre, sigla, semestre, grupo) => {
    MateriaResource.store({
      nombre: nombre,
      sigla: sigla,
      semestre: semestre,
      grupo: grupo
    }).then(resp => {
      getListMaterias();
    });
      
  };
  const onDelete = (materia ) => {
    MateriaResource.delete(materia._id).then(()=>{
      getListMaterias();
    })
  }
    return (   
        <div className="content"> 
          <Buscador/> <br/><br/>
          <Materia  onNewMateria= {newMateriaHandler}/>
          <ListaMateria materias={listMateria} onDelete={onDelete}/>
        </div>
    )
}
export default TabMaterias;