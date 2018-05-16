import { combineReducers } from 'redux';
import PostsReducer from './posts_reducer';
import BenefitReducer from './benefits';
const rootReducer = combineReducers({
  posts: PostsReducer,
  benefits: BenefitReducer
});
export default rootReducer;