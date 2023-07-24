import { configureStore } from '@reduxjs/toolkit'
import userSlice from './slices/user.slice';
import phrasesSlice from './slices/phrases.slice';

export default configureStore({
  reducer: {
    user: userSlice,
    phrases: phrasesSlice
  }
});
