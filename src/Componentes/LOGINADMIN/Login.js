import React, {useState, useContext, useReducer, Fragment} from "react";
import Card from "../UI/Card";
import button from "../UI/button";
import AuthContext from "../store/auth-context";
import Admin from "../../view/Admin";
import { Router } from "react-router";


const emailReducer = (state, action) => {
    if (action.type === "USER_INPUT") {
        return {
            value: action.val,
            isValid: action.val.includes("@gmail"),
        };
    }
    return {
        value: "",
        isValid: false,
    };
};

const Login = (props) => {
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
                <label>Email</label>
                <input type="email" placeholder="ejemplo@gmail.com" onChange={emailChangeHandler} />
                <label>Password</label> 
                <input type="password" onChange={passwordChangeHandler} />
                <button>Login</button>
            </form>
        </Card>
    );
};

export default Login;


	


	
