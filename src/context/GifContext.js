import React, { useReducer } from 'react'
import instance from '../api/request'
import ACTIONS from './constants'
import { reducer } from './GifReducer';

const initialState = {
  isLoading: false,
  error: [],
  gifs: {
    trending: [],
    searched: [],
  }
}


// Create context
export const GifContext = React.createContext(undefined);

// Provider component
export const GifProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);


  async function getTrending() {
    dispatch({
      type: ACTIONS.LOADING,
      payload: { isLoading: true }
    })
    try {
      const { data } = await instance.get("/gifs/trending", {
        params: {
          limit: 25,
          rating: "r",
        }
      })
      dispatch({
        type: ACTIONS.SET_TRENDING,
        payload: {
          gifs: { trending: data.data },
          isLoading: false
        }
      })
    } catch (error) {
      console.error(error);
    }
  }


  return <GifContext.Provider value={{ state, getTrending }}>{children}</GifContext.Provider>;
};



