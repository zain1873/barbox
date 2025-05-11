    // src/components/DashboardLayout.jsx
import React from 'react';
import Header from './Navbar';
import Footer from './Footer';
import Dashboard from '../pages/Dashboard';

const DashboardLayout = () => {
  return (
    <>
      <Header />
      <Dashboard />
      <Footer />
    </>
  );
};

export default DashboardLayout;
