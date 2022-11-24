import { combineReducers, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({ }); // I will add house / appointment after 
                                          // creating the action for it

const store = configureStore({
  reducer: rootReducer, 
  middleware: [thunk],
});

export default store;