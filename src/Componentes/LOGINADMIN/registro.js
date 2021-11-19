
import React from 'react';
import Card from "../UI/Card";
import button from "../UI/button";
const Login = () => {
    return (
    <React.Fragment>
        <Card>
            <form>
            <label> Registro </label>
                 <label> Nombres </label>
                 <input  type="text" placeholder="Nombre"/> <br/>
                 <label>Apellidos</label>
                 <input type="password" pattern=".{6,}"/>  <br/>
                 <label> Usuario </label>
                 <input  type="email" placeholder="ejemplo@gmail.com"/> <br/>
                 <label>Apellidos</label>
                 <input type="password" pattern=".{6,}"/>  <br/>
                 <label>Contraseña</label>
                 <input type="password" pattern=".{6,}"/>  <br/>
                
               <button type="submit">Ingresar</button> <br/>
                
                 <p>
                     <button type="submit">Crear Registro </button>
                </p>

        </form>
        </Card>
        
    </React.Fragment>
    );
};
export default Login;

