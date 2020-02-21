/*
JOSEPH P. PASAOA
Redux Root Reducer | Portfolio Site
*/


/* EXTERNALS - LOCALS */
import { combineReducers } from 'redux';

import userAuthReducer from './reducers/userAuthReducer';
import uiReducer from './reducers/uiReducer';


/* COMBINEREDUCERS */
export default combineReducers({
  userAuthState: userAuthReducer,
  uiState: uiReducer
});
