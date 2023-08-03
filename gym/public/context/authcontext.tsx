import React, { useState, createContext } from "react";

interface AuthContextProps {
  hambergerState: boolean;
  setHambergerState: (state:boolean) => void;
  searchState: boolean;
  setSearchState: (state:boolean) => void;
}

export const AuthContext = createContext<AuthContextProps>({
  hambergerState: false,
  setHambergerState: () => {},
  searchState:false,
  setSearchState: () => {},

});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [hambergerState, setHambergerState] = useState(false);
  const [searchState, setSearchState] = useState(false);
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