import React, { useState, createContext } from "react";
import type { gymWearItem } from "@/src/type/gymwear";

interface AuthContextProps {
  state:number;
  setState:(state:number) => void;
  hambergerState: number;
  setHambergerState: (hambergerState:number) => void;
  searchState: number;
  setSearchState: (searchState:number) => void;
  brandModalState: number;
  setBrandModalState:(brandModalstate:number) => void;
  announceState:boolean;
  setAnnounceState:(announceState:boolean) => void;
  searchWord:string;
  setSearchWord:(searchWord:string)=> void;
  searchResultText:string;
  setSearchResultText:(searchWord:string)=> void;
  searchResultData:gymWearItem[];
  setSearchResultData:(searchResultData:gymWearItem[])=> void;
  searchResultDataSort20:gymWearItem[];
  setSearchResultDataSort20:(searchResultDataSort20:gymWearItem[])=> void;
  topAndBottomData:gymWearItem[];
  setTopAndBottomData:(topAndBottomData:gymWearItem[])=>void;
  comboBoxState:string;
  setComboBoxState:(comboBoxState:string)=>void;
  comboBoxDestination:string,
  setComboBoxDestination:(comboBoxDestination:string)=>void,
  pcSortState:number,
  setPcSortState:(pcSortState:number)=>void,
}

export const AuthContext = createContext<AuthContextProps>({
  state: 0,
  setState: () => {},
  hambergerState: 0,
  setHambergerState: () => {},
  searchState:0,
  setSearchState: () => {},
  brandModalState:0,
  setBrandModalState:() => {},
  announceState:true,
  setAnnounceState: () => {},
  searchWord:'',
  setSearchWord:()=>{},
  searchResultText:'',
  setSearchResultText:()=>{},
  searchResultData:[],
  setSearchResultData:()=>{},
  searchResultDataSort20:[],
  setSearchResultDataSort20:()=>{},
  topAndBottomData:[],
  setTopAndBottomData:()=>{},
  comboBoxState:"all",
  setComboBoxState:()=>{},
  comboBoxDestination:"",
  setComboBoxDestination:()=>{},
  pcSortState:0,
  setPcSortState:()=>{},

  


});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, setState] = useState(0);
  const [hambergerState, setHambergerState] = useState(0);
  const [searchState, setSearchState] = useState(0);
  const [brandModalState, setBrandModalState] = useState(0);
  const [announceState, setAnnounceState] = useState(true);
  const [searchWord, setSearchWord] = useState('');
  const [searchResultText, setSearchResultText] = useState('');
  const [searchResultData, setSearchResultData]= useState<gymWearItem[]>([]);
  const [searchResultDataSort20, setSearchResultDataSort20]= useState<gymWearItem[]>([]);
  const [topAndBottomData, setTopAndBottomData]= useState<gymWearItem[]>([]);
  const [comboBoxState,setComboBoxState]= useState<string>("all")
  const [comboBoxDestination,setComboBoxDestination] = useState<string>("")
  const [pcSortState,setPcSortState] = useState<number>(0)

  return (
    <AuthContext.Provider
      value={{
        state,
        setState,
        hambergerState,
        setHambergerState,
        searchState,
        setSearchState,
        brandModalState,
        setBrandModalState,
        announceState,
        setAnnounceState,
        searchWord,
        setSearchWord,
        searchResultText,
        setSearchResultText,
        searchResultData,
        setSearchResultData,
        searchResultDataSort20,
        setSearchResultDataSort20,
        topAndBottomData,
        setTopAndBottomData,
        comboBoxState,
        setComboBoxState,
        comboBoxDestination,
        setComboBoxDestination,
        pcSortState,
        setPcSortState,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};