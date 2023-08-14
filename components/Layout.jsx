import React from "react";
import { Header } from './';
import  Portfolio  from '../components/Portfolio/Hero'



const Layout = ({children}) => {
  return (
    <>
    <Header />
    <Portfolio/>
    {children}
    </>
  )
};

export default Layout;
