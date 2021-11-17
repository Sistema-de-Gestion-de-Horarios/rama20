import React, {useState, useContext, Fragment} from "react";
import NavBar from "./Componentes/Navigation/Nave";
import Login from "./Componentes/LOGINADMIN/Login";
import LoginE from "./Componentes/LOGINEST/LoginE";
import LoginD from "./Componentes/LOGINDOC/LoginD";
import authCtx from "./Componentes/store/auth-context";


import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Docente from './view/Docente';
import Admin from './view/Admin';
import Estudiante from './view/Estudiante';
import Pagina from './Pagina';

function App() {
	const ctx = useContext(authCtx);
    return (
		<Router>
			<Switch>
			<Route exact path="/">
					<Pagina />	
				<Fragment>
						 <Login  onClick={ctx.onClick}/>
                	</Fragment>		
			</Route>
			</Switch>
		</Router>
     )
 }
export default App;