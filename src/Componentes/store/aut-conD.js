import {createContext, useState, useEffect} from "react";

const AuthConD = createContext ({
    isDocenteIn: false,
    onLogin: (ci, password) => {},
    onLogout: () => {},
});

export const AuthContextProvider = (props) => {
    const [isDocenteIn, setisDocenteIn] = useState(false);
    useEffect(() => {
        const storagedDocententeInfo = localStorage.getItem("isisDocenteIn");
        if (storagedDocententeInfo === 1){
        	setisDocenteIn(true);
        }
}, []);

    const DocenteHandler = (CI, password) => {
        // console.log("Docente en---");
        // localStorage.setItem("isisDocenteIn", 1);
        setisDocenteIn(true);	
    };

  const logoutHandler = () => {
    // console.log("pame");
    // console.log(isDocenteIn);
    localStorage.removeItem("isDocenteIn");
    setisDocenteIn(false);
};
  return (
       <AuthContext.Provider 
       value={{
        isDocenteIn,
        onLogin:loginHandler,
        onLogout: logoutHandler,
       }}
    >
        {props.children}
        </AuthContext.Provider>
  );
};

export default AuthConD; 