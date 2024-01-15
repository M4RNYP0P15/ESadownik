import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {local_storage} from '../../Index';
import {RootState} from './store';

interface PlantListState {
  userPlants: Plant[];
}
const loadUserPlantsMMKV = (): Plant[] => {
  const userPlants = local_storage.getString('userPlants');
  return userPlants ? JSON.parse(userPlants) : [];
};

const initialState: PlantListState = {
  userPlants: loadUserPlantsMMKV(),
};

const plantListSlice = createSlice({
  name: 'plantList',
  initialState,
  reducers: {
    addPlant: (state, action: PayloadAction<Plant>) => {
      state.userPlants.push(action.payload);
      local_storage.set('userPlants', JSON.stringify(state.userPlants));
    },
    removePlant: (state, action: PayloadAction<Plant>) => {
      state.userPlants = state.userPlants.filter(
        (plant: Plant) => plant.nazwa !== action.payload.nazwa,
      );
      local_storage.set('userPlants', JSON.stringify(state.userPlants));
    },
  },
});

export const isPlantInList = (state: RootState, plantName: string): boolean => {
  return state.plantList.userPlants.some(
    (plant: Plant) => plant.nazwa === plantName,
  );
};

export const {addPlant, removePlant} = plantListSlice.actions;
export const selectedUserPlants = (state: RootState) => state.plantList;
export default plantListSlice.reducer;
