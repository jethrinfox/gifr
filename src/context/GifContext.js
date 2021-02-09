import React, { createContext, useState } from "react";

// Create context
export const GifContext = createContext({});

// Provider component
export const GifProvider = ({ children }) => {
  const [searchedGifs, setSearchedGifs] = useState([]);
  const [trendingGifs, setTrendingGifs] = useState([]);

  return (
    <GifContext.Provider
      value={{ searchedGifs, setSearchedGifs, trendingGifs, setTrendingGifs }}
    >
      {children}
    </GifContext.Provider>
  );
};
