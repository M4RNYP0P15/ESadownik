import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {RootState} from './store';
import {local_storage} from '../../Index';

interface ThemeState {
  darkMode: boolean;
  notificationsEnabled: boolean;
}

const loadSettingsMMKV = (): ThemeState => {
  const settings = local_storage.getString('theme');
  if (settings) {
    const parsedSettings = JSON.parse(settings);
    return {
      darkMode: parsedSettings.darkMode || false,
      notificationsEnabled: parsedSettings.notificationsEnabled,
    };
  } else {
    return {
      darkMode: false,
      notificationsEnabled: false,
    };
  }
};
// Initially we will have a light mode
const initialState: ThemeState = loadSettingsMMKV();

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleDarkMode: (state, action: PayloadAction<boolean>) => {
      state.darkMode = action.payload;
      local_storage.set('theme', JSON.stringify(state));
    },
    toggleNotifications: (state, action: PayloadAction<boolean>) => {
      // state.notificationsEnabled = !state.notificationsEnabled;
      state.notificationsEnabled = action.payload;
      local_storage.set('theme', JSON.stringify(state));
    },
  },
});

export const {toggleDarkMode, toggleNotifications} = themeSlice.actions;
export const selectDarkMode = (state: RootState) => state.theme.darkMode;
export const selectNotifications = (state: RootState) =>
  state.theme.notificationsEnabled;

export default themeSlice.reducer;
