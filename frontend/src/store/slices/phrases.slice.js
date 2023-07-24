import { createSlice } from '@reduxjs/toolkit';

export const phrasesSlice = createSlice({
  name: 'phrases',
  initialState: [],
  reducers: {
    setPhrases: (state, actions) => {
      return actions.payload;
    }
  }
});

export const getPhrasesThunk = data => dispatch => {
  return dispatch(setPhrases(data));
};

export const { setPhrases } = phrasesSlice.actions;

export default phrasesSlice.reducer;