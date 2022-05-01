import React from 'react';
import { Helmet } from "react-helmet"
import Footer from './Footer';
import Header from './Header';


const Layout = ({ children }) => {
  return (
    <>
      <Helmet title="HectoPixelRGB" />
      <Header />
      <main className="text-gray-900">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
