import { combineReducers } from '@reduxjs/toolkit';

import hotelsApi from './apis/hotels.api';

import userReducer from './slices/user.slice';

const StoreReducers = combineReducers({
    [hotelsApi.reducerPath]: hotelsApi.reducer,
    user: userReducer
})

export default StoreReducers;