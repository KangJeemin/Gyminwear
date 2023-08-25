import React, { useState, createContext } from "react";
interface SearchResultItem {
  // Define the properties of each item in the search result data
  topid: number;
  brandname: string;
  image:string;
  productname:string;
  price:number;
  url:string;
  likecount:number;
  // ... other properties
}

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
  searchResultData:SearchResultItem[];
  setSearchResultData:(searchResultData:SearchResultItem[])=> void;
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
  setSearchResultData:()=>{}


});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, setState] = useState(0);
  const [hambergerState, setHambergerState] = useState(0);
  const [searchState, setSearchState] = useState(0);
  const [announceState, setAnnounceState] = useState(true);
  const [searchWord, setSearchWord] = useState('');
  const [searchResultData, setSearchResultData]= useState<SearchResultItem[]>([]);

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
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};