import { combineReducers } from 'redux';
import customizationReducer from './customizationReducer';

const reducer = combineReducers({
    customization: customizationReducer,
});

export default reducer;
