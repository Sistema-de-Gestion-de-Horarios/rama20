import { Tabs } from 'element-react'
import React from 'react'

import 'element-theme-default';
import TabUsuarios from './components/TabUsuarios';
import TabPersonas from './components/TabPersonas';
import TabAmbientes from './components/TabAmbientes';
import TabMaterias from './components/TabMaterias';


export default function Admin() {
    return (
        <div>
            <Tabs activeName="1" onTabClick={ (tab) => console.log(tab.props.name) }>
                <Tabs.Pane label="Usuarios" name="1"><TabUsuarios/></Tabs.Pane>
                <Tabs.Pane label="Personas" name="2"><TabPersonas/></Tabs.Pane>
                <Tabs.Pane label="Materias" name="3"><TabMaterias/></Tabs.Pane> 
                <Tabs.Pane label="Ambientes" name="4"><TabAmbientes/></Tabs.Pane> 
                
            </Tabs>
            
        </div>
        
    )
}
