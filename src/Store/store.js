//---IMPORTS
import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import userReducer from "./user.reducer";

//---COMBINE REDUCERS
const rootReducer = combineReducers({
  users: userReducer,
});

//---CONFIG
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const generateStore = () => {
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
};

//---EXPORT
export default generateStore;
