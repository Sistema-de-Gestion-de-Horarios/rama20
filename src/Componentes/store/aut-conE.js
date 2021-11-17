import {createContext, useState, useEffect} from "react";

const AuthConE = createContext ({
    isEstudianteIn: false,
    onLogin: (email, password) => {},
    onLogout: () => {},
});

export const AuthContextProvider = (props) => {
    const [isEstudianteIn, setisEstudianteIn] = useState(false);
    useEffect(() => {
    const storagedEstudianteInfo = localStorage.getItem("isEstudianteIn");
    if (storagedEstudianteInfo === 1){
        setisEstudianteIn(true);
    };
}, []);

    const estudianteHandler = (RU, password) => {
        console.log("Estudiante en---");
        localStorage.setItem("isEstudianteIn", 1);
        setisEstudianteIn(true);
    };
  const logoutHandler = () => {
    // console.log("login");
    // console.log(isEstudianteIn);
    localStorage.removeItem("isEstudianteIn");
    setisEstudianteIn(false);
};
  return (
       <AuthContext.Provider 
       value={{
        isEstudianteIn,
        onLogin:estudianteHandler,
        onLogout: logoutHandler,
       }}
    >
        {props.children}
        </AuthContext.Provider>
  );
};

export default AuthConE; 



