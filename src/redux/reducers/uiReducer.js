/*
JOSEPH P. PASAOA
Redux UserInterface Reducer | Portfolio Site
*/


/* EXTERNALS - LOCALS */
import { AN_ACTION } from '../actionTypes';


/* MAIN */
const INITIAL_STATE = {
  debug: "Hello world, tis I, de bug."
}

const uiReducer = (state = INITIAL_STATE, action) => {
  const newState = { ...state };
  switch (action.type) {
    case AN_ACTION:
      console.log("an action has been dispatched!");
      break;
    default:
      break;
  }
  return newState;
}


export default uiReducer;
