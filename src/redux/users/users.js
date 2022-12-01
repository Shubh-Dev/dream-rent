import { createAsyncThunk } from '@reduxjs/toolkit';
import userAPI from '../userAPI';

// Setting Actions and Reducers for the Users
// const ADD_USER = 'ADD_USER';
const GET_USERS = 'GET_USERS';

const initialUserArray = [];

const userReducer = (state = initialUserArray, action) => {
  switch (action.type) {
    case 'ADD_USER/fulfilled':
      return [...state, action.payload];

    case GET_USERS:
      return action.payload;

    default:
      return state;
  }
};

// Setting up Action Creators

export const getAllUsers = (payload) => (
  {
    type: GET_USERS,
    payload,
  }
);

export const fetchUsers = createAsyncThunk(GET_USERS, async (post, { dispatch }) => {
  try {
    const response = await userAPI.fetchUsers();
    dispatch(getAllUsers(response)); // fire for this action creator
  } catch (err) {
    dispatch({ type: 'GET_USERS_REJECTED', payload: err });
  }
});

export default userReducer;
