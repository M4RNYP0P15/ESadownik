import {createSlice} from '@reduxjs/toolkit';
import {RootState} from './store';

interface NotificationsState {
  upcomingEvents: string[]; // Lista zbliżających się wydarzeń
}

const initialState: NotificationsState = {
  upcomingEvents: [],
};

const notificationsSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    setUpcomingEvents: (state, action) => {
      state.upcomingEvents = action.payload;
    },
  },
});

export const {setUpcomingEvents} = notificationsSlice.actions;
export const selectUpcomingEvents = (state: RootState) =>
  state.notifications.upcomingEvents;
export default notificationsSlice.reducer;
