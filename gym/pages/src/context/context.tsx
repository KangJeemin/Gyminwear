import React, { useState, createContext } from "react";

interface AuthContextProps {
  currentPage: number;
  setCurrentPage: (currentPage:number) => void;
  
}

export const AuthContext = createContext<AuthContextProps>({
  currentPage: 0,
  setCurrentPage: () => {},
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <AuthContext.Provider
      value={{
        currentPage,
        setCurrentPage,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};