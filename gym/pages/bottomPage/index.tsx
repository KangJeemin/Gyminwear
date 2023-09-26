import { useRouter } from 'next/router';
import React, { useState, useRef, useEffect, useContext } from 'react';
import { AuthContext } from '@/public/context/authcontext';
import styles from './index.module.css';
import Image from 'next/image';
import type { gymWearItem ,GymItemProps} from '@/src/type/gymwear';
import convertWon from '@/pages/src/module/convertWon';
import { GetServerSidePropsContext } from 'next';
import Pc from './pc';

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const { page } = context.query;
    const res = await fetch(`http://localhost:3000/api/bottompage?page=${page}`);
    const data = await res.json();
    return { props: { 
        gymitem:data
     } };
  }

const Index= ({gymitem}:GymItemProps) => { 
    return(
        <Pc gymitem={gymitem} />
    )
}
export default Index