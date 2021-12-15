import { Tabs } from 'element-react'
import React from 'react'

import 'element-theme-default';

export default function Estudiante() {
        return (
            <div>
                <Tabs activeName="1" onTabClick={ (tab) => console.log(tab.props.name) }>
                    <Tabs.Pane label="programacion" name="1">programacion</Tabs.Pane>
                    <Tabs.Pane label="horarios" name="2">horarios</Tabs.Pane> 
                    <Tabs.Pane label="perfil" name="3">perfil</Tabs.Pane> 
                    <Tabs.Pane label="inicio" name="4">inicio</Tabs.Pane> 
                    
                </Tabs>
                
            </div>
            
        )
    }
    
