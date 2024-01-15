// settingsHelpers.tsx
import {Dispatch} from 'redux';
import {toggleDarkMode} from '../redux-store/reducers';
import {MMKV} from 'react-native-mmkv';

// export const loadThemeFromStorage = async (
//   dispatch: Dispatch,
//   local_storage: MMKV,
// ) => {
//   try {
//     const storedDarkMode = await local_storage.getString('darkMode');
//     if (storedDarkMode !== null && storedDarkMode !== undefined) {
//       dispatch(toggleDarkMode(JSON.parse(storedDarkMode)));
//     }
//   } catch (error) {
//     console.error('Błąd wczytywania ustawień z pamięci lokalnej:', error);
//   }
// };

export const toggleTheme = async (
  dispatch: Dispatch,
  currentDarkMode: boolean,
  local_storage: MMKV,
) => {
  const newDarkMode = !currentDarkMode;
  dispatch(toggleDarkMode(newDarkMode));
  local_storage.set('darkMode', JSON.stringify(newDarkMode));
};
