import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';

import search from './reducers/search';
import register from './reducers/register';
import auth from './reducers/auth';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['isLogin', 'user', 'authtoken'],
};

const rootReducer = combineReducers({
  auth: persistReducer(persistConfig, auth),
  search,
  register,
});


export const store = createStore(rootReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);
