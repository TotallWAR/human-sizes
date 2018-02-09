import { combineEpics } from 'redux-observable';

import {
  changeChestGirthValueEpic,
  changeWaistGirthValueEpic,
  changeHipGirthValueEpic,
} from './human-sizes';

export const rootEpic = combineEpics(
  changeChestGirthValueEpic,
  changeWaistGirthValueEpic,
  changeHipGirthValueEpic
);
