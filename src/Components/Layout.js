import React from 'react';
import Header from 'Components/Header';
import Footer from 'Components/Footer';

const Layout = ({ children }) => (
  <>
    <Header />
    { children }
    <Footer />
  </>
);

export default Layout;
