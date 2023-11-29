import React from 'react';
import Head from 'next/head';
import Button from '@mui/material/Button';
import Header from '@/components/header';
import PageNavigate from '@/components/PageNavigate';

export default function index() {
  return (
    <>
      <Header />
      <PageNavigate />
    </>
  );
}
