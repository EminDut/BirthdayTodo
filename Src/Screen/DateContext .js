import React, {createContext, useState} from 'react';

export const DateContext = createContext();

export const DateProvider = ({children}) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [birthdayList, setBirthdayList] = useState([]);

  return (
    <DateContext.Provider
      value={{selectedImage, setSelectedImage, birthdayList, setBirthdayList}}>
      {children}
    </DateContext.Provider>
  );
};
