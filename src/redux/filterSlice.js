import { createSlice } from '@reduxjs/toolkit';

const filterInitialContent = { content: '' };

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialContent,
  reducers: {
    setFilterContent(state, action) {
      state.content = action.payload;
    },
  },
});

export const { setFilterContent } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
