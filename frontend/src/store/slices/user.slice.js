import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {},
  reducers: {
    setUser: (state, actions) => {
      return actions.payload;
    }
  }
});

export const loginThunk = (data, navigate) => dispatch => {
  localStorage.setItem('user', JSON.stringify(data));
  navigate('/')
  return dispatch(setUser(data));
};

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
