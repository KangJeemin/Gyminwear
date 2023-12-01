import React from 'react';
import Head from 'next/head';
import Button from '@mui/material/Button';
import Header from '@/components/header';
import PageNavigate from '@/components/PageNavigate';
import ResponsiveAppBar from '@/components/appbar';

export default function index() {
  return (
    <>
      <Head>
      <meta name="naver-site-verification" content="ed45f0e362ab1bf63a17000be1426ad91060cd44" />
      </Head>
      <ResponsiveAppBar/>
      <PageNavigate />
    </>
  );
}
