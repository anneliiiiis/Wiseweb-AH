import { combineReducers } from 'redux';
import AboutsReducer from './abouts_reducer';
import BenefitReducer from './benefits';
const rootReducer = combineReducers({
  abouts: AboutsReducer,
  benefits: BenefitReducer
});
export default rootReducer;