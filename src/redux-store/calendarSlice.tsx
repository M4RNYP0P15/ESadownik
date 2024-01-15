import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {RootState} from './store';

interface CalendarState {
  events: {
    [date: string]: {selected: boolean; marked: boolean; dotColor?: string};
  };
}

const initialState: CalendarState = {
  events: {},
};

const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    addEvent: (
      state,
      action: PayloadAction<{date: string; event: string; dotColor?: string}>,
    ) => {
      const {date, event, dotColor} = action.payload;
      state.events[date] = {selected: true, marked: true, dotColor};
    },
  },
});

export const {addEvent} = calendarSlice.actions;
export const selectEvents = (state: RootState) => state.calendar.events;
export default calendarSlice.reducer;
