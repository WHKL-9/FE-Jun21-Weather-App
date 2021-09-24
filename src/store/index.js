import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import searchReducer from "../reducers/search";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { encryptTransform } from "redux-persist-transform-encrypt";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

// declaring initial state
export const initialState = {
  search: {
    results: null,
    loading: true,
    error: false,
  },
};

// persistConfig takes in 2 arg
const persistConfig = {
  key: "root",
  storage,
  transforms: [
    encryptTransform({
      secretKey: process.env.REACT_APP_MY_SECRET_KEY
    })
  ]
};

const bigReducer = combineReducers({
  search: searchReducer,
});

const persistedReducer = persistReducer(persistConfig, bigReducer);

// 3 arguments for createStore:
// 1) primary reducer
// 2) initial state of the app
// 3) middlewares/plugins
export const configureStore = createStore(
  persistedReducer,
  initialState,
  process.env.REACT_APP_DEVELOPMENT ? composeEnhancers(applyMiddleware(thunk)) : compose(applyMiddleware(thunk))
);

// ! dont forget
export const persistor = persistStore(configureStore);
