import React, { useState, createContext } from "react";

interface AuthContextProps {
  state: number;
  setState: (state:number) => void;
  
}

export const AuthContext = createContext<AuthContextProps>({
  state: 0,
  setState: () => {},
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
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
};