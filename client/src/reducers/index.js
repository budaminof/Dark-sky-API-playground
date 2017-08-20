import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import searchReducer from './search';

const rootReducer = combineReducers({
  form: formReducer,
  search: searchReducer
});

export default rootReducer;
