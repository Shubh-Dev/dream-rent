import { createAsyncThunk } from '@reduxjs/toolkit';
import HouseAPI from '../houseAPI';

// Setting Actions and Reducers for the Users
const ADD_HOUSE = 'ADD_HOUSE';
const REMOVE_HOUSE = 'REMOVE_HOUSE';
const GET_HOUSE = 'GET_HOUSE';
const GET_HOUSES = 'GET_HOUSES';

const initialHouseArray = [];

const houseReducer = (state = initialHouseArray, action) => {
  switch (action.type) {
    case 'GET_HOUSES':
      return action.payload;
    case 'ADD_HOUSE/fulfilled':
      return [...state, action.payload];

    case 'REMOVE_HOUSE/fulfilled':
      return [
        ...state.filter((house) => (house.id) !== action.payload),
      ];

    case GET_HOUSE:
      return action.payload;

    default:
      return state;
  }
};

// Setting up Action Creators

export const getAllHouses = (payload) => (
  {
    type: GET_HOUSES,
    payload,
  }
);

export const fetchHouses = createAsyncThunk(GET_HOUSES, async (get, { dispatch }) => {
  try {
    const response = await HouseAPI.fetchHouses();
    dispatch(getAllHouses(response));
  } catch (err) {
    dispatch({ type: 'GET_HOUSES_REJECTED', payload: err });
  }
});

export const deleteHouse = createAsyncThunk(REMOVE_HOUSE, async (id) => {
  await HouseAPI.deleteHouse(id);
  return id;
});

export const addHouse = createAsyncThunk(ADD_HOUSE, async (house) => {
  await HouseAPI.addBook({
    id: house.id,
    address: house.address,
    balcony: house.balcony,
    rooms: house.rooms,
    size: house.size,
    image: house.image,
    house_type: house.house_type,
  });
  return {
    id: house.id,
    address: house.address,
    balcony: house.balcony,
    rooms: house.rooms,
    size: house.size,
    image: house.image,
    house_type: house.house_type,
  };
});

export default houseReducer;
