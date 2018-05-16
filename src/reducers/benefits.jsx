import { FETCH_BENEFITS } from '../actions/index';
const INITIAL_STATE = { all: [] };
export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
  case FETCH_BENEFITS:
    return { ...state, all: action.payload.data.items };
  default:
    return state;
  }
}