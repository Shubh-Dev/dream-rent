import { combineReducers, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import houseReducer from './house/houses';

const rootReducer = combineReducers({
  houses: houseReducer,
}); // I will add house / appointment after

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

export default store;
