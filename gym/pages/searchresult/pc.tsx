
import { useRouter } from 'next/router';
import React, { useState, useRef, useEffect, useContext, ChangeEvent } from 'react';
import styles from './index.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass,faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from '@/public/context/authcontext';
import Image from 'next/image'
import convertWon from '@/pages/src/module/convertWon';
import axios from 'axios';
import type { gymWearItem } from '../../src/type/gymwear';
import { GetServerSideProps,GetServerSidePropsContext } from 'next';
import NumberNavigate from '../src/component/middle/numberNavigate/numberNavigate';


interface gymwear{
    data:gymWearItem;
}

const Pc = () => { 
    const {searchWord} = useContext(AuthContext)

    return(
        <div id={styles.pc_searchResultContainer}>
            <div id={styles.pc_searchResultLeftBox}></div>
            <div id={styles.pc_searchResultCenterBox}>
                <div id={styles.pc_searchResultTextBox}>
                    <h2>&#39; {searchWord} &#39; 에 대한 검색 결과를 몇개 발견했습니다 .</h2>
                </div>
                <div id={styles.pc_searchResultInputBox}></div>
                <div id={styles.pc_searchResultMarginBox}></div>
                <div id={styles.pc_searchResultItemBox}></div>
                <div id={styles.pc_searchResultNumverNavigateBox}></div>
            </div>
            <div id={styles.pc_searchResultRightBox}></div>
        </div>
    )
}

    
   
export async function getServerSideProps(context: GetServerSidePropsContext) {
    const { search, page } = context.query;
    const res = await fetch(`http://localhost:3000/api/search?search=${search}&page=${page}`);
    const data = await res.json();
    return { props: { 
        item:data.result,
        count:data.countresult[0].C
     } };
  }
  

export default Pc;

