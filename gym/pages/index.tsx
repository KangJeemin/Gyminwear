import React from 'react';
import Head from 'next/head';
import Button from '@mui/material/Button';
import Header from '@/components/header';
import PageNavigate from '@/components/PageNavigate';
import ResponsiveAppBar from '@/components/appbar';
import { NextApiRequest, NextApiResponse } from 'next';
import { getIronSession } from "iron-session";
import {
  defaultSession,
  SessionData,
  sessionOptions,
} from "@/lib/config/iron-config";

export default function index(session:any) {
  return (
    <>
      <Head>
      <meta name="naver-site-verification" content="ed45f0e362ab1bf63a17000be1426ad91060cd44" />
      </Head>
      <ResponsiveAppBar props={session}/>
      <PageNavigate />
    </>
  );
}

export async function getServerSideProps(req: NextApiRequest, res: NextApiResponse) {
  const session = await getIronSession<SessionData>(
    req,
    res,
    sessionOptions,
  );
  
  
  return session
}