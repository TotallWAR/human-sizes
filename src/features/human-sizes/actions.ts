import {createAction} from 'typesafe-actions';
import * as types from '../../constants/action-types';
import {
  CHANGE_CHEST_GIRTH_VALUE,
  CHANGE_WAIST_GIRTH_VALUE,
  CHANGE_HIP_GIRTH_VALUE,
  CHANGE_WEIGHT_VALUE,
  CHANGE_GROWTH_VALUE,
  CHANGE_SIZE_VALUE,
  CHANGE_SVG_CHEST_GIRTH_VALUE,
  CHANGE_SVG_HIP_GIRTH_VALUE,
  CHANGE_SVG_WAIST_GIRTH_VALUE
} from '../../typings/modules';

// input actions
export const changeSize: (type: string, value: number) => CHANGE_SIZE_VALUE =
  (type: string, value: number) => {
    switch (type) {
      case types.CHANGE_CHEST_GIRTH_VALUE: {
        return changeChestGirthValue(value);
      }
      case types.CHANGE_WAIST_GIRTH_VALUE: {
        return changeWaistGirthValue(value);
      }
      case types.CHANGE_HIP_GIRTH_VALUE: {
        return changeHipGirthValue(value);
      }
      case types.CHANGE_WEIGHT_VALUE: {
        return changeWeightValue(value);
      }
      case types.CHANGE_GROWTH_VALUE: {
        return changeGrowthValue(value);
      }
      default:
        return {
          type: null,
          value: null,
        };
    }
  };

export const changeChestGirthValue: (value: number) => CHANGE_CHEST_GIRTH_VALUE =
  createAction(types.CHANGE_CHEST_GIRTH_VALUE, (value: number) => ({
    type: types.CHANGE_CHEST_GIRTH_VALUE,
    value: value,
  }));

export const changeWaistGirthValue: (value: number) => CHANGE_WAIST_GIRTH_VALUE =
  createAction(types.CHANGE_WAIST_GIRTH_VALUE, (value: number) => ({
    type: types.CHANGE_WAIST_GIRTH_VALUE,
    value: value,
  }));

export const changeHipGirthValue: (value: number) => CHANGE_HIP_GIRTH_VALUE =
  createAction(types.CHANGE_HIP_GIRTH_VALUE, (value: number) => ({
    type: types.CHANGE_HIP_GIRTH_VALUE,
    value: value,
  }));

export const changeWeightValue: (value: number) => CHANGE_WEIGHT_VALUE =
  createAction(types.CHANGE_WEIGHT_VALUE, (value: number) => ({
    type: types.CHANGE_WEIGHT_VALUE,
    value: value,
  }));

export const changeGrowthValue: (value: number) => CHANGE_GROWTH_VALUE =
  createAction(types.CHANGE_GROWTH_VALUE, (value: number) => ({
    type: types.CHANGE_GROWTH_VALUE,
    value: value,
  }));
// end input actions

// svg action
export const changeSvgChestGirthValue: (path: object) => CHANGE_SVG_CHEST_GIRTH_VALUE =
  createAction(types.CHANGE_SVG_CHEST_GIRTH_VALUE, (path: object) => ({
    type: types.CHANGE_SVG_CHEST_GIRTH_VALUE,
    path: path,
  }));

export const changeSvgWaistGirthValue: (path: object) => CHANGE_SVG_WAIST_GIRTH_VALUE =
  createAction(types.CHANGE_SVG_WAIST_GIRTH_VALUE, (path: object) => ({
    type: types.CHANGE_SVG_WAIST_GIRTH_VALUE,
    path: path,
  }));

export const changeSvgHipGirthValue: (path: object) => CHANGE_SVG_HIP_GIRTH_VALUE =
  createAction(types.CHANGE_SVG_HIP_GIRTH_VALUE, (path: object) => {
    return {
      type: types.CHANGE_SVG_HIP_GIRTH_VALUE,
      path: path,
    };
  });
// end svg action
