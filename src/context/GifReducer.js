import ACTIONS from './constants'


export function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.LOADING:
      return {
        ...state,
        ...action.payload
      }
    case ACTIONS.SET_TRENDING:
      return {
        ...state,
        ...action.payload
      }

    default:
      return state
  }
}