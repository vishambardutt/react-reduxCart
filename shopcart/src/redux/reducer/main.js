import { combineReducers } from 'react';
import { cartReducer } from './reducer';

let rootReducer = combineReducers(cartReducer);

export default rootReducer;