/* eslint-disable camelcase */
import { createAsyncThunk } from '@reduxjs/toolkit';
import ReserveAPI from '../reserveAPI';

const ADD_RESERVE = 'ADD_RESERVE';
const GET_RESERVES = 'GET_RESERVES';

const initialReserveArray = [];

const reserveReducer = (state = initialReserveArray, action) => {
  switch (action.type) {
    case 'ADD_RESERVE/fulfilled':
      return [...state, action.payload];

    case 'GET_RESERVES':
      return action.payload;

    default:
      return state;
  }
};

export const getAllReserves = (payload) => (
  {
    type: GET_RESERVES,
    payload,
  }
);

export const fetchReserves = createAsyncThunk(GET_RESERVES, async (post, { dispatch }) => {
  try {
    const response = await ReserveAPI.fetchReserves();
    dispatch(getAllReserves(response));
  } catch (err) {
    dispatch({ type: 'GET_RESERVES_REJECTED', payload: err });
  }
});

export const addReserves = createAsyncThunk(ADD_RESERVE, async (reserve) => {
  const res = await ReserveAPI.addReserve({
    id: reserve.id,
    date: reserve.date,
    time: reserve.time,
    visitors: reserve.visitors,
    user_id: reserve.user_id,
    house_id: reserve.house_id,
  });
  return res;
});

export default reserveReducer;
