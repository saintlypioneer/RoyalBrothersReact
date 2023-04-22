import { applyMiddleware, combineReducers, createStore } from "redux";
import initialReducer from "./initialReducer";
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import Login_Singup_Reducer from "./Login_Signup_Reducer";
import searchReducer from "./search/searchReducer"
import themeReducer from "./themeMode/themeReducer";
import sortNfilterReducer from "./newUpdate/sortNfilterReducer";
import { myRideReducer } from './myrides/reducermyride.js';

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

//Do not change anything and use combine reducer to combine and provide your reducer to the app.

const rootReducer = combineReducers({
    initialReducer,
    LoginSignupRed: Login_Singup_Reducer,
    searchReducer,
    themeReducer,
    sortNfilterReducer,
    myRideReducer
})

const persistConfig = {
    key: 'root',
    storage,
  }

  const persistedReducer = persistReducer(persistConfig,rootReducer)

export const store = createStore(persistedReducer, applyMiddleware(thunk, logger))

export const persistedStore = persistStore(store)
