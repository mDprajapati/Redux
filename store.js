import { applyMiddleware, compose, createStore } from 'redux';

import rootReducer from '../root-reducer/root-reducer';
import thunk from "redux-thunk";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
      rootReducer,
      composeEnhancers(applyMiddleware(thunk))
)

export default store;