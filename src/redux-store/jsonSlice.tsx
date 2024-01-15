import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from './store';

const initialState: JsonDataState = {
  data: {kategorie: []},
  lastModified: '',
  foundOdmiana: null,
};

const jsonSlice = createSlice({
  name: 'jsonData',
  initialState,
  reducers: {
    setJsonData: (
      state,
      action: PayloadAction<{data: PlantsJsonData; lastUpdate: string}>,
    ) => {
      state.data = action.payload.data;
      state.lastModified = action.payload.lastUpdate;
    },
    findPlantByName: (
      state,
      action: PayloadAction<{rodzaj: string; name: string}>,
    ) => {
      const {rodzaj, name} = action.payload;
      for (const kategoria of state.data.kategorie) {
        for (const typ of kategoria.typ) {
          if (typ.rodzaj === rodzaj) {
            const _odmiana = typ.odmiany.find(o => o.nazwa === name);
            //console.log(_odmiana);
            if (_odmiana) {
              state.foundOdmiana = _odmiana;
              return;
            }
          }
        }
      }
      state.foundOdmiana = null;
    },
  },
});

export const {setJsonData, findPlantByName} = jsonSlice.actions;
export const selectJsonData = (state: RootState) => state.jsonData;
export const selectFoundPlantData = (state: RootState) =>
  state.jsonData.foundOdmiana;
export default jsonSlice.reducer;
