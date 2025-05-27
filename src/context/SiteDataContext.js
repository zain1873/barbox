// src/context/SiteDataContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const SiteDataContext = createContext();

export function SiteDataProvider({ children }) {
  const [siteData, setSiteData] = useState({
    home: {},
    about: {},
    services: {},
    contact: {},
    // Add more sections as needed
  });

  useEffect(() => {
    console.log("🌐 Site Data Updated:", siteData);
  }, [siteData]);

  const updateSiteData = (section, fields) => {
    setSiteData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        ...fields
      }
    }));
  };

  return (
    <SiteDataContext.Provider value={{ siteData, updateSiteData }}>
      {children}
    </SiteDataContext.Provider>
  );
}

export function useSiteData() {
  return useContext(SiteDataContext);
}
