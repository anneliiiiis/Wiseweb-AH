import { combineReducers } from 'redux';
import AboutsReducer from './abouts_reducer';
import ImagesReducer from './images_reducer';
import BenefitReducer from './benefits';
const rootReducer = combineReducers({
  abouts: AboutsReducer,
  benefits: BenefitReducer,
  images: ImagesReducer
});
export default rootReducer;