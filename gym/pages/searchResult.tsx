import React from 'react'
import Header from './src/component/header/header'
import HeaderMargin from './src/component/header/headerMargin'
import SearchResult from './src/component/middle/searchResultComponent/searchResultComponent'
const searchResult = () => {
    return (
        <div>
            <Header/>
            <HeaderMargin/>
            <SearchResult/>
        </div>
    )

}

export default searchResult