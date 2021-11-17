import React from 'react';
import {Menu } from 'element-react';
import { Layout } from 'element-react';
import Nave from './Componentes/Navigation/Nave';
import authCtx from "./Componentes/store/auth-context"; 
import Login from './Componentes/LOGINADMIN/Login';
import Admin from './view/Admin';

import {
	BrowserRouter as Router,
	Switch,
	Route,

} from 'react-router-dom'

function Pagina (props) {
	const estudianteHandler=(e)=> {
		props.onLogin();
		e.preventDefault();
	}
	const handlerSubmit =(e) => {
		props.onLogin();
		e.preventDefault();
	}
    return (
		<Router>
			<Switch>
			  <Layout.Row className="tac">
				<Layout.Col span={8}>
				  <Menu defaultActive="2" className="el-menu-vertical-demo" onsubmit={handlerSubmit}>
                          <Menu.SubMenu index="1" title={<span><i ></i>🏠 HOME</span>}>
                                <Menu.Item index="1-1"  onClick={props.onClick}> {props.children} Estudiantes</Menu.Item>
                                <Menu.Item index="1-2"  onClick={props.onClick}> {props.children} Docentes</Menu.Item>
                                <Menu.Item index="1-3"  onClick={props.onClick}> {props.children} Administrador</Menu.Item>
                          </Menu.SubMenu>
    				 </Menu>
				</Layout.Col>
			  </Layout.Row>
			</Switch>    				  
	    </Router>  
		
     );
 }
			
export default Pagina;
