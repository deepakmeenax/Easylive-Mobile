import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';

import search from './reducers/search';
import register from './reducers/register';
import auth from './reducers/auth';
import location from './reducers/location';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['search', 'register'],
};

const rootReducer = combineReducers({
  auth,
  search,
  register,
  location,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);
