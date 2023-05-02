// third party
import { combineReducers } from 'redux';

// project import
import customizationReducer from './customizationReducer';
import snackbarReducer from './snackbarReducer';

// ==============================|| REDUCER ||============================== //

const reducer = combineReducers({
  customization: customizationReducer,
  snackbar: snackbarReducer
});

export default reducer;
