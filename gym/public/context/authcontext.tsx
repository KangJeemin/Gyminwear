import React, { useState, createContext } from "react";

interface AuthContextProps {
  state:number;
  setState:(state:number) => void;
  hambergerState: number;
  setHambergerState: (state:number) => void;
  searchState: number;
  setSearchState: (state:number) => void;
  announceState:boolean;
  setAnnounceState:(announceState:boolean) => void;
  searchWord:string;
  setSearchWord:(state:string)=> void;
}

export const AuthContext = createContext<AuthContextProps>({
  state: 0,
  setState: () => {},
  hambergerState: 0,
  setHambergerState: () => {},
  searchState:0,
  setSearchState: () => {},
  announceState:true,
  setAnnounceState: () => {},
  searchWord:'',
  setSearchWord:()=>{}


});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, setState] = useState(0);
  const [hambergerState, setHambergerState] = useState(0);
  const [searchState, setSearchState] = useState(0);
  const [announceState, setAnnounceState] = useState(true);
  const [searchWord, setSearchWord] = useState('');

  return (
    <AuthContext.Provider
      value={{
        state,
        setState,
        hambergerState,
        setHambergerState,
        searchState,
        setSearchState,
        announceState,
        setAnnounceState,
        searchWord,
        setSearchWord
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};