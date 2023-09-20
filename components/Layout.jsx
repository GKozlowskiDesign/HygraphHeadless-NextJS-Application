import React from "react";
import { Header } from './';
import Footer from "./Portfolio/Footer";
const Layout = ({children}) => {
  return (
    <>
    <Header />
    {children}
    <Footer />
    </>
  )};
export default Layout;
