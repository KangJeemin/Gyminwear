import React, { useState, createContext } from "react";

interface AuthContextProps {
  hambergerState: number;
  setHambergerState: (state:number) => void;
  searchState: number;
  setSearchState: (state:number) => void;
}

export const AuthContext = createContext<AuthContextProps>({
  hambergerState: 0,
  setHambergerState: () => {},
  searchState:0,
  setSearchState: () => {},

});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [hambergerState, setHambergerState] = useState(0);
  const [searchState, setSearchState] = useState(0);
  return (
    <AuthContext.Provider
      value={{
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