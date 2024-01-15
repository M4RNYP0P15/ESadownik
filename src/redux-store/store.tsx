import {configureStore} from '@reduxjs/toolkit';
import themeReducer from './reducers';
import jsonReducer from './jsonSlice';
import plantListSlice from './plantListSlice';
import calendarReducer from './calendarSlice';
import notificationsReducer from './notificationsSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    jsonData: jsonReducer,
    plantList: plantListSlice,
    calendar: calendarReducer,
    notifications: notificationsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
