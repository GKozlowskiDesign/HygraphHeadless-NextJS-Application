import React, { useEffect, useState } from 'react';
import { Layout } from '../components'
import '@/styles/globals.scss'
import { Analytics } from '@vercel/analytics'

export default function App({ Component, pageProps }) {
  return (

  <Layout>
  <Component {...pageProps} />
  <Analytics />
  </Layout>
  
  )
}
