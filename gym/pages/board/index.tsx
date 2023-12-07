import React from 'react';
import Head from 'next/head';
import PageNavigate from '@/components/PageNavigate';
import ResponsiveAppBar from '@/components/appbar';
import Board from '@/components/board'
import Miniboard from '@/components/miniboard'
import useSession from '@/lib/useSession';
import Pagedivide from '@/components/pagedivide';

export default function board() {
  
  return (
    <>
        <Board/>
    </>
  );
}