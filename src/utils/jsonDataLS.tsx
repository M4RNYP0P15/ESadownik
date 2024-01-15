import {MMKV} from 'react-native-mmkv';

export const saveJsonDataToMMKV = (data: JsonDataState, instance: MMKV) => {
  instance.set('jsonData', JSON.stringify(data));
};

export const loadJsonDataFromMMKV = (
  instance: MMKV,
): {data: PlantsJsonData; lastModified: string} | null => {
  const storedData = instance.getString('jsonData');
  return storedData ? JSON.parse(storedData) : null;
};
