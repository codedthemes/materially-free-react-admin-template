// third party
import { combineReducers } from 'redux';

// project import
import customizationReducer from './customizationReducer';

// ==============================|| REDUCER ||============================== //

const reducer = combineReducers({
  customization: customizationReducer
});

export default reducer;
