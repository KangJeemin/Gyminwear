import React, { useState, createContext } from "react";

interface AuthContextProps {
  state:number;
  setState:(state:number) => void;
  hambergerState: number;
  setHambergerState: (state:number) => void;
  searchState: number;
  setSearchState: (state:number) => void;
}

export const AuthContext = createContext<AuthContextProps>({
  state: 0,
  setState: () => {},
  hambergerState: 0,
  setHambergerState: () => {},
  searchState:0,
  setSearchState: () => {},

});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, setState] = useState(0);
  const [hambergerState, setHambergerState] = useState(0);
  const [searchState, setSearchState] = useState(0);
  return (
    <AuthContext.Provider
      value={{
        state,
        setState,
        hambergerState,
        setHambergerState,
        searchState,
        setSearchState
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};