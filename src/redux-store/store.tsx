import {configureStore} from '@reduxjs/toolkit';
import themeReducer from './reducers';
import jsonReducer from './jsonSlice';
import plantListSlice from './plantListSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    jsonData: jsonReducer,
    plantList: plantListSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
