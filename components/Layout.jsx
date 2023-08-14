import React from "react";
import { Header } from './';
import  Portfolio  from '../components/Portfolio/Hero'
import Footer from "./Portfolio/Footer";



const Layout = ({children}) => {
  return (
    <>
    <Header />
    <Portfolio/>
    {children}
    <Footer />
    </>
  )
};

export default Layout;
