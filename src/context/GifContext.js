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

  async function getTrending({ page = 0 } = {}) {
    dispatch({
      type: ACTIONS.LOADING,
      payload: true,
    });

    getTrendingGifs({ page })
      .then((nextGifs) => {
        console.log("trending: ", state.gifs.trending.concat(nextGifs));
        dispatch({
          type: ACTIONS.SET_TRENDING,
          payload: {
            gifs: state.gifs.trending.concat(nextGifs),
            isLoading: false,
          },
        });
      })
      .catch((err) => console.error(err));
  }

  async function getByKeyword({ keyword, page }) {
    dispatch({
      type: ACTIONS.LOADING,
      payload: true,
    });
    getGifs({ keyword, page })
      .then((nextGifs) => {
        dispatch({
          type: ACTIONS.SET_SEARCHED,
          payload: {
            gifs: state.gifs.searched.concat(nextGifs),
            isLoading: false,
          },
        });
      })
      .catch((err) => console.error(err));
  }

  return (
    <GifContext.Provider value={{ state, getTrending, getByKeyword }}>
      {children}
    </GifContext.Provider>
  );
};
