import React from 'react';
import { useContext, useEffect, useState, createContext } from 'react';

const AppContext = createContext();
const AppProvider = ({ children }) => {
  const [inputChange, setInputChange] = useState(false);
  const [menuWidth, setMenuWidth] = useState(0);
  const [apiData, setApiData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  //   open modal

  const getData = async () => {
    setIsLoading(true);
    const data = await fetch(
      'https://api.unsplash.com/photos/?per_page=30&client_id=-PBVfsdRk-_IMODxPrhaJCXnVdMgmzF97lthIyOGQjs'
    );
    const res = await data.json();
    setApiData(res);

    setIsLoading(false);

    // return () => setApiData();
  };
  useEffect(() => {
    getData();

    return () => {
      getData();
    };
  }, []);
  return (
    <AppContext.Provider
      value={{
        inputChange,
        setInputChange,
        menuWidth,
        setMenuWidth,
        apiData,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
