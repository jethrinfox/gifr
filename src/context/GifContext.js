import React, { useReducer } from "react";
import getGifs from "services/getGifs";
import getTrendingGifs from "services/getTrendingGifs";
import ACTIONS from "./constants";
import { reducer } from "./GifReducer";

const initialState = {
  isLoading: false,
  error: [],
  gifs: {
    trending: [],
    searched: [],
  },
};

// Create context
export const GifContext = React.createContext(undefined);

// Provider component
export const GifProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  async function getTrending(limit, rating, page) {
    dispatch({
      type: ACTIONS.LOADING,
      payload: true,
    });
    try {
      const gifs = await getTrendingGifs({ limit, rating, page });
      dispatch({
        type: ACTIONS.SET_TRENDING,
        payload: {
          gifs,
          isLoading: false,
        },
      });
    } catch (error) {
      console.error(error);
    }
  }

  async function getByKeyword(keyword) {
    dispatch({
      type: ACTIONS.LOADING,
      payload: true,
    });
    try {
      const gifs = await getGifs({ keyword });
      dispatch({
        type: ACTIONS.SET_SEARCHED,
        payload: {
          gifs,
          isLoading: false,
        },
      });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <GifContext.Provider value={{ state, getTrending, getByKeyword }}>
      {children}
    </GifContext.Provider>
  );
};
