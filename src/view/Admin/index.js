import { Tabs } from 'element-react'
import React from 'react'

import 'element-theme-default';
import TabDocentes from './components/TabDocentes';
import TabAmbientes from './components/TabAmbientes';
import TabMaterias from './components/TabMaterias';
import TabEstudiantes from './components/TabEstudiantes';

export default function Admin() {
    return (
        <div>
            <Tabs activeName="1" onTabClick={ (tab) => console.log(tab.props.name) }>
                <Tabs.Pane label="Docentes" name="1"><TabDocentes/></Tabs.Pane>
                <Tabs.Pane label="Materias" name="2"><TabMaterias/></Tabs.Pane> 
                <Tabs.Pane label="Estudiantes" name="3"><TabEstudiantes/></Tabs.Pane> 
                <Tabs.Pane label="Ambientes" name="4"><TabAmbientes/></Tabs.Pane> 
                
            </Tabs>
            
        </div>
        
    )
}
