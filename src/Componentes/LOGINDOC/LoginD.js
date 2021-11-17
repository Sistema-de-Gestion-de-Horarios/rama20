import React, {useState, useContext, useReducer} from "react";
import Card from "../UI/Card";
import button from "../UI/button";
import AuthContext from "../store/auth-context";
import Docente from "../../view/Docente";
import { Router } from "react-router";


const emailReducer = (state, action) => {
    if (action.type === "USER_INPUT") {
        return {
            value: action.val,
            isValid: action.val.includes(""),
        };
    }
    return {
        value: "",
        isValid: false,
    };
};

const LoginD = (props) => {
const ctx = useContext (AuthContext);

    // const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState("");

   const [email, dispatchEmail] = useReducer (emailReducer, {
       value: "",
       isValid: null,
   }); 
    const emailChangeHandler = (e) => { 
        // console.log(e.target.value);
        // setEmail(e.target.value);
        dispatchEmail({
            val: e.target.value,
            type: "USER_INPUT",
        });
    };
    const passwordChangeHandler = (e) => { 
        // console.log(e. target. value); 
        setPassword(e. target.value);
    };
    const handlerSubmit = (e) => { 
        e.preventDefault(); 
        if (email.isValid) {
            ctx.onLogin(email, password);
        }
        else {
            console.log("email no valido");
        }
    };
    return (
        <Card>
            <form onSubmit ={handlerSubmit}>
                <label>CI</label>
                <input type="text" onChange={emailChangeHandler} />
                <label>Password</label> 
                <input type="password" onChange={passwordChangeHandler} />
                <button>Login</button>
            </form>
        </Card>
       
    );
};

export default LoginD;