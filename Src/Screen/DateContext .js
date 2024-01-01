import React, { createContext, useState, useContext } from 'react';

export const DateContext = createContext();

export const DateProvider = ({ children }) => {

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <DateContext.Provider value={{ selectedImage, setSelectedImage }}>
      {children}
    </DateContext.Provider>
  );
};
