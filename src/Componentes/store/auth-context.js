import {createContext, useState, useEffect} from "react";

const AuthContext = createContext (null);

export const AuthContextProvider = (props) => {
  const [authUser, setAuthUser] = useState(undefined);
  const loginHandler = (email, password) => {
    // console.log("pame");
    // console.log(isAdministrativoIn);
    // localStorage.removeItem("isAdministrativoIn");
    
    let user = {
      name: email,
      role: email
    };
    setAuthUser(user);
  };
  const logoutHandler = () => {
    // console.log("pame");
    // console.log(isAdministrativoIn);
    // localStorage.removeItem("isAdministrativoIn");
    setAuthUser(undefined);
  };
  return (
       <AuthContext.Provider 
       value={{
          authUser,
          onLogin: loginHandler,
          onLogout: logoutHandler,
       }}
    >
        {props.children}
        </AuthContext.Provider>
  );
};

export default AuthContext; 



	