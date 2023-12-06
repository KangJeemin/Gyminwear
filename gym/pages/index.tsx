import React from 'react';
import Head from 'next/head';
import PageNavigate from '@/components/PageNavigate';
import ResponsiveAppBar from '@/components/appbar';
import Miniboard from '@/components/miniboard'
import useSession from '@/lib/useSession';

export default function Main() {
  const {session,isLoading}=useSession();
  React.useEffect(()=>{
    console.log(session)
    if (session.isLoggedIn) {
      console.log("로그인 되어있음")
    }
    else{
      console.log("로그아웃 되어있음")
    }
   
  }, [isLoading, session.isLoggedIn,]);
  
  return (
    <>
      <Head>
      <meta name="naver-site-verification" content="ed45f0e362ab1bf63a17000be1426ad91060cd44" />
      </Head>
      <ResponsiveAppBar />
      <PageNavigate />
      <Miniboard/>

    </>
  );
}
