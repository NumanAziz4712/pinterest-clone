import React from 'react';
import { useContext, useEffect, useState, createContext } from 'react';

const clientID = `?client_id=-PBVfsdRk-_IMODxPrhaJCXnVdMgmzF97lthIyOGQjs`;
const mainURL = `https://api.unsplash.com/photos/`;
const searchURL = `https://api.unsplash.com/search/photos/`;

const AppContext = createContext();
const AppProvider = ({ children }) => {
  const [inputChange, setInputChange] = useState(false);
  const [menuWidth, setMenuWidth] = useState(0);
  const [apiData, setApiData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // const [query, setQuery] = useState('');
  const [MyAlert, setMyAlert] = useState(false);

  let url;
  const getData = async (query) => {
    setIsLoading(true);
    const urlQuery = `&query=${query}`;

    if (query) {
      url = `${searchURL}${clientID}${urlQuery}&per_page=20`;
    } else {
      url = `${mainURL}${clientID}&per_page=20`;
    }
    try {
      const data = await fetch(url);
      const res = await data.json();
      if (query) {
        setApiData(res.results);
      } else {
        setApiData(res);
      }

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }

    // return () => setApiData();
  };

  // sear
  useEffect(() => {
    getData();

    return () => {
      getData();
    };
  }, [url]);

  // submit

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
        // query,
        // setQuery,
        getData,
        MyAlert,
        setMyAlert,
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
