import React from 'react'
import Header from '../src/component/header/header'
import HeaderMargin from '../src/component/header/headerMargin'
import SearchResult from '../searchresult/[result]'
import Footer from '../src/component/footer/footer'
const searchResult = () => {
    return (
        <div>
            <Header/>
            <HeaderMargin/>
            <SearchResult/>
            <Footer/>
        </div>
    )

}

export default searchResult