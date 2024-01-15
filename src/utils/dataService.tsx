// import {useDispatch} from 'react-redux';
import {loadJsonDataFromMMKV, saveJsonDataToMMKV} from './jsonDataLS';
import {MMKV} from 'react-native-mmkv';
import {setJsonData} from '../redux-store/jsonSlice';
import {Dispatch} from 'redux';
// import JsonData from '../redux-store/types';

const fetchDataAndUpdateState = async (dispatch: Dispatch, instance: MMKV) => {
  try {
    const storedData = loadJsonDataFromMMKV(instance); // Load saved data
    const lastModified = storedData ? storedData.lastModified : ''; // If data exist -> take time of last modification
    const options: RequestInit = lastModified
      ? {headers: {'If-Modified-Since': lastModified}}
      : {};
    const response = await fetch(
      'https://m4rnyp0p15.github.io/jsonData/tree.json',
      options,
    );

    if (response.status === 304) {
      // We have latest data -> use saved mmkv data
      if (storedData) {
        dispatch(
          setJsonData({data: storedData.data, lastUpdate: lastModified}),
        );
      }
      return;
    }
    //console.log(response);
    const jsonData: PlantsJsonData = await response.json();
    //console.log(jsonData.kategorie);
    const newLastModified = response.headers.get('last-modified');
    if (newLastModified) {
      saveJsonDataToMMKV(
        {data: jsonData, lastModified: newLastModified},
        instance,
      );
      dispatch(setJsonData({data: jsonData, lastUpdate: newLastModified}));
      console.log('Pobrano nowe dane. (Zaktualizowano plik tree.json');
    }
  } catch (error) {
    console.error('Blad podczas pobierania danych', error);
  }
};

export default fetchDataAndUpdateState;
