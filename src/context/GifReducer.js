import ACTIONS from "./constants";

export function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.LOADING:
      return {
        ...state,
        ...action.payload,
      };
    case ACTIONS.SET_TRENDING:
      return {
        ...state,
        gifs: { trending: action.payload.gifs },
        isLoading: action.payload.isLoading,
      };
    case ACTIONS.SET_SEARCHED:
      return {
        ...state,
        gifs: { searched: action.payload.gifs },
        isLoading: action.payload.isLoading,
      };

    default:
      return state;
  }
}
