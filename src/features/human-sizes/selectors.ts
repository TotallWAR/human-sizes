import { State } from './';

export const getReduxHipGirth =
  (state: State) => state.hipGirth;

export const getReduxChestGirth =
  (state: State) => state.chestGirth;

export const getReduxWaistGirth =
  (state: State) => state.waistGirth;

export const getReduxHipWeight =
  (state: State) => state.weight;

export const getReduxGrowth =
  (state: State) => state.growth;
