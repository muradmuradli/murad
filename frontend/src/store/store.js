import { configureStore } from '@reduxjs/toolkit'
import scientistReducer from '../features/scientistSlice';

export const store = configureStore({
  reducer: {
    scientist: scientistReducer
  },
})