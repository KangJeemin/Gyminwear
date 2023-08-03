import React, { useState, createContext } from "react";

interface AuthContextProps {
  state: number;
  setState: (state:number) => void;
  
}

const AuthContext = createContext<AuthContextProps>({
  state: 0,
  setState: () => {},
});

export const useUser = () => React.useContext(AuthContext);

const AuthProvider = ({children}:any)=>{

  const [state, setState] = useState(0);
  return (
    <AuthContext.Provider
      value={{
        state,
        setState
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider