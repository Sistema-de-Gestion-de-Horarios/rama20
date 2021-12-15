
import { Tabs } from 'element-react'
import React from 'react'

import 'element-theme-default';
export default function Docente() {
    return (
        <div>
            <h1>Horario Asignado</h1>
            <Tabs activeName="1" onTabClick={ (tab) => console.log(tab.props.name) }>
                    <Tabs.Pane label="programacion" name="1">materias-programadas</Tabs.Pane>
                    <Tabs.Pane label="horarios" name="2">ambientes designados</Tabs.Pane> 
            </Tabs>  
            <section>
           
                <ul>
                    
                    <label for="msg">Comentarios:</label>
                    <textarea id="msg" name="user_message"></textarea>
                </ul>
                <li class="button">
                        <button type="submit">Envíe su mensaje</button>
                </li>
        
            </section>  
           
        </div>
    )
}



