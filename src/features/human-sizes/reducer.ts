import {combineReducers} from 'redux';
import {getType, getReturnOfExpression} from 'typesafe-actions';

import * as humanSizesActions from './actions';
import {
  sizeDefaultValues as defaultValues,
  hipGirthInitValue,
  waistGirthInitValue,
  chestGirthPath
} from '../../constants/default-values';

const returnsOfActions = Object.values(humanSizesActions).map(getReturnOfExpression);
export type Action = typeof returnsOfActions[number];

export type State = {
  readonly hipGirth: number;
  readonly chestGirth: number;
  readonly waistGirth: number;
  readonly weight: number;
  readonly growth: number;
  readonly chestGirthSvg: object;
  readonly waistGirthSvg: object;
  readonly hipGirthSvg: object;
};

export const reducer = combineReducers<State, Action>({
  // inputs
  chestGirth: (state = defaultValues.chestGirth, action) => {
    switch (action.type) {
      case getType(humanSizesActions.changeChestGirthValue):
        return action.value;
      default:
        return state;
    }
  },

  waistGirth: (state = defaultValues.waistGirth, action) => {
    switch (action.type) {
      case getType(humanSizesActions.changeWaistGirthValue):
        return action.value;
      default:
        return state;
    }
  },

  hipGirth: (state = defaultValues.hipGirth, action) => {
    switch (action.type) {
      case getType(humanSizesActions.changeHipGirthValue):
        return action.value;
      default:
        return state;
    }
  },

  weight: (state = defaultValues.weight, action) => {
    switch (action.type) {
      case getType(humanSizesActions.changeWeightValue):
        return action.value;
      default:
        return state;
    }
  },

  growth: (state = defaultValues.growth, action) => {
    switch (action.type) {
      case getType(humanSizesActions.changeGrowthValue):
        return action.value;
      default:
        return state;
    }
  },
  // end inputs

  // svg
  waistGirthSvg: (state = waistGirthInitValue, action) => {
    switch (action.type) {
      case getType(humanSizesActions.changeSvgWaistGirthValue):
        return Object.assign({}, action.path);
      default:
        return state;
    }
  },
  chestGirthSvg: (state = chestGirthPath, action) => {
    switch (action.type) {
      case getType(humanSizesActions.changeSvgChestGirthValue):
        return Object.assign({}, action.path);
      default:
        return state;
    }
  },
  hipGirthSvg: (state = hipGirthInitValue, action) => {
    switch (action.type) {
      case getType(humanSizesActions.changeSvgHipGirthValue):
        return Object.assign({}, action.path);
      default:
        return state;
    }
  },
  // end svg
});
