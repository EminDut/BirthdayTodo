import {createContext, useState} from 'react';

export const PhotoContex = createContext();

export const PhotoContexProvider = (props) => {
  const [selectedPhoto, setSelectedPhoto] = useState([]);

  return (
    <PhotoContex.Provider value={{ selectedPhoto, setSelectedPhoto }}>
      {props.children}
    </PhotoContex.Provider>
  );
};
