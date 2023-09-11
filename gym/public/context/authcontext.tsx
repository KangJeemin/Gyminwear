import React, { useState, createContext } from "react";
import type { gymWearItem } from "@/src/type/gymwear";

interface AuthContextProps {
  state:number;
  setState:(state:number) => void;
  hambergerState: number;
  setHambergerState: (hambergerState:number) => void;
  searchState: number;
  setSearchState: (searchState:number) => void;
  announceState:boolean;
  setAnnounceState:(announceState:boolean) => void;
  searchWord:string;
  setSearchWord:(searchWord:string)=> void;
  searchResultData:gymWearItem[];
  setSearchResultData:(searchResultData:gymWearItem[])=> void;
  searchResultDataSort20:gymWearItem[];
  setSearchResultDataSort20:(searchResultDataSort20:gymWearItem[])=> void;
  topAndBottomData:gymWearItem[];
  setTopAndBottomData:(topAndBottomData:gymWearItem[])=>void;
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
  setSearchWord:()=>{},
  searchResultData:[],
  setSearchResultData:()=>{},
  searchResultDataSort20:[],
  setSearchResultDataSort20:()=>{},
  topAndBottomData:[],
  setTopAndBottomData:()=>{}


});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, setState] = useState(0);
  const [hambergerState, setHambergerState] = useState(0);
  const [searchState, setSearchState] = useState(0);
  const [announceState, setAnnounceState] = useState(true);
  const [searchWord, setSearchWord] = useState('');
  const [searchResultData, setSearchResultData]= useState<gymWearItem[]>([]);
  const [searchResultDataSort20, setSearchResultDataSort20]= useState<gymWearItem[]>([]);
  const [topAndBottomData, setTopAndBottomData]= useState<gymWearItem[]>([]);

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
        setSearchWord,
        searchResultData,
        setSearchResultData,
        searchResultDataSort20,
        setSearchResultDataSort20,
        topAndBottomData,
        setTopAndBottomData
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};