import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import textSlice from '../features/Textredu/textSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    textSlice: textSlice,
  },
});
