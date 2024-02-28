import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  scientists: [],
};

export const scientistSlice = createSlice({
  name: 'scientists',
  initialState,
  reducers: {
    addScientist: (state, action) => {
      state.scientists.push(action.payload);
    },
    deleteScientist: (state, action) => {
      state.scientists = state.scientists.filter(scientist => scientist.id !== action.payload.id);
    },
    setScientists: (state, action) => {
      state.scientists = action.payload;
    },
  },
});

export const { addScientist, deleteScientist, setScientists } = scientistSlice.actions;

export default scientistSlice.reducer;
