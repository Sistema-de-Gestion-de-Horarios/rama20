import {createContext, useState, useEffect} from "react";

const AuthContext = createContext ({
    isAdministrativoIn: false,
    onLogin: (email, password) => {},
    onLogout: () => {},
});

export const AuthContextProvider = (props) => {
    const [isAdministrativoIn, setAdministrativoIn] = useState(false);
    useEffect(() => {
    const storagedAdministrativoInfo = localStorage.getItem("isAdministrativoIn");
	if (storagedAdministrativoInfo === 1){
		setAdministrativoIn(true);
	}
}, []);

const AdministradorHandler = (CI, password) => {
    // console.log("Admin en---");
    // localStorage.setItem("isAdministrativon", 1);
    setAdministrativoIn(true);
};
  const logoutHandler = () => {
    // console.log("pame");
    // console.log(isAdministrativoIn);
    // localStorage.removeItem("isAdministrativoIn");
    setAdministrativoIn(false);
};
  return (
       <AuthContext.Provider 
       value={{
        isAdministrativoIn,
        onLogin:AdministradorHandler,
        onLogout: logoutHandler,
       }}
    >
        {props.children}
        </AuthContext.Provider>
  );
};

export default AuthContext; 



	