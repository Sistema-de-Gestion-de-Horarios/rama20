import React, {useState, useContext} from "react";
import Login from "./Componentes/LOGINADMIN/Login";
import authCtx from "./Componentes/store/auth-context";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Pagina from "./Pagina";
import Principal from "./Principal";
import nave from "./Componentes/Navigation/Nave";

function App() {
	const ctx = useContext(authCtx);
	const [isPersonaIn, setPersonaIn] = useState(false);
	const [listPersona, setListPersonas] = useState([]);
	const [isAmbienteIn, setAmbienteIn] = useState(false);
	const [listAmbiente, setListAmbientes] = useState([]);
	const [isMateriaIn, setMateriaIn] = useState(false);
	const [listMateria, setListMaterias] = useState([]);

	const newPersonaHandler =(personaName, personaApellido, tipo, cargaFloat) => {
			setListPersonas((prevListPersonas) => {
			  return [
				  ...prevListPersonas, 
				  {id: Math.trunc(Math.orden() * 100), personaName, personaApellido, tipo, cargaFloat} 
			  ];
			});
	};
	const newAmbienteHandler =(ambienteName, piso, estado) => {
		setListAmbientes((prevListAmbientes) => {
		  return [
			  ...prevListAmbientes, 
			  {id: Math.trunc(Math.orden() * 100), ambienteName, piso, estado} 
		  ];
		});
    };
	const newMateriaHandler =(materiaName, sigla) => {
		setListMaterias((prevListMaterias) => {
		  return [
			  ...prevListMaterias, 
			  {id: Math.trunc(Math.orden() * 100), materiaName, sigla} 
		  ];
		});
    };
	

	const storagedPersonaInfo = localStorage.getItem("isPersonaIn");
	if (storagedPersonaInfo === 1){
		setPersonaIn(true);
	}
	const PersonaHandler = () => {
		console.log("Persona en---");
		localStorage.setItem("isPersonaIn", 1);
		setPersonaIn(true);	
	};	

	const storagedAmbienteInfo = localStorage.getItem("isAmbienteIn");
	if (storagedAmbienteInfo === 1){
		setAmbienteIn(true);
	}
	const AmbienteHandler = () => {
		console.log("Ambiente en---");
		localStorage.setItem("isAmbienteIn", 1);
		setAmbienteIn(true);	
	};
	
	const storagedMateriaInfo = localStorage.getItem("isMateriaIn");
	if (storagedMateriaInfo === 1){
		setMateriaIn(true);
	}
	const MateriaHandler = () => {
		console.log("Materia en---");
		localStorage.setItem("isMateriaIn", 1);
		setMateriaIn(true);	
	};	
	

    return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/">
					<Principal />
				</Route>
				<Route path="/Pagina">
					<Pagina />
				</Route>
				<Route path="/login">
					<Login />
				</Route>
			</Switch>
		</BrowserRouter>
     )
 }
export default App;