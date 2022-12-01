import { combineReducers, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import houseReducer from './house/houses';
import userReducer from './users/users';

const rootReducer = combineReducers({
  houses: houseReducer,
  users: userReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

export default store;
