import { applyMiddleware, createStore, compose, combineReducers } from "redux";
import { authReducer } from "../reducer/authReducer";
import { dashboardReducer } from "../reducer/dashboardReducer";


import thunk from "redux-thunk";


const reducers = combineReducers({
  auth: authReducer,
  dashboard: dashboardReducer,
});

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
