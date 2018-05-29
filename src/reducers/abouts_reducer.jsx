import { FETCH_ABOUTS } from '../actions/index';
const INITIAL_STATE = { all: [] };
export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
  case FETCH_ABOUTS:
    return { ...state, all: action.payload.data.items };
  default:
    return state;
  }
}