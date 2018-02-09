import * as humanSizesActions from './actions';
import {ActionsObservable} from 'redux-observable';
import * as typeConstants from '../../constants/action-types';
import {
  CHANGE_CHEST_GIRTH_VALUE,
  CHANGE_HIP_GIRTH_VALUE,
  CHANGE_WAIST_GIRTH_VALUE,
} from '../../typings/modules';

type LightStore = { getState: () => void; dispatch: () => void };

export const changeChestGirthValueEpic =
  (action$: ActionsObservable<CHANGE_CHEST_GIRTH_VALUE>, store: LightStore) => {
    return action$.ofType(typeConstants.CHANGE_CHEST_GIRTH_VALUE)
      .map((action: any) => {
        const curVal: number = parseInt((action.value).toFixed(0), 10);
        return humanSizesActions.changeSvgChestGirthValue({
          leftTitPath: `M102.308237,57.3733931 ` +
          `C${(curVal / 0.5874).toFixed(0)}.137316` +
          `,${(curVal / 0.8235).toFixed(0)}.946597 ` +
          `${(curVal / 0.4375).toFixed(0)}.011779,51.840369 159.092621,13.5364159`,

          rightTitPath: `M59.8189984,60.8494359 ` +
          `C${(124 - curVal).toFixed(0)}.9318397` +
          `,${((-3) + curVal).toFixed(0)}.8782607 ` +
          `8,${((-3) + curVal).toFixed(0)} ` +
          `2.27801975` +
          `,${((-22) + curVal).toFixed(0)}.7424922 ` +
          `C${(82 - curVal).toFixed(0)}.96452092,46.0147645 6.00288102,5.29233183 5.24999415,0.872766207`,
        });
      });
  };

export const changeWaistGirthValueEpic =
  (action$: ActionsObservable<CHANGE_WAIST_GIRTH_VALUE>, store: LightStore) => {
    return action$.ofType(typeConstants.CHANGE_WAIST_GIRTH_VALUE)
      .map((action: any) => {
        const curVal: number = parseInt((action.value).toFixed(0), 10);
        return humanSizesActions.changeSvgWaistGirthValue({
          leftWaistPath: `M189.197222,127.67915 ` +
          `C${(curVal / 0.233 - 5).toFixed(0)}.946081,100.588544 ` +
          `${(curVal / 0.241 - 5).toFixed(0)}.213673,81.6954945 ` +
          `${(curVal / 0.2426 - 5).toFixed(0)},71 ` +
          `C${(curVal / 0.2455 - 5).toFixed(0)}.786327,60.3045055 ` +
          `${(curVal / 0.241 - 5).toFixed(0)}.61262,36.6378388 ` +
          `177.478881,0`,

          rightWaistPath: `M28,29 ` +
          `C${(68 - curVal).toFixed(0)}.6256303,41.4824261 ` +
          `${(67 - curVal).toFixed(0)}.0274994,52.4960243 ` +
          `${(64 - curVal).toFixed(0)}.2056075,62.0407944 ` +
          `C${(61 - curVal).toFixed(0)}.3837155,71.5855645 ` +
          `12.7340465,86.5317479 0.256600467,106.879344`,
        });
      });
  };

export const changeHipGirthValueEpic =
  (action$: ActionsObservable<CHANGE_HIP_GIRTH_VALUE>, store: LightStore) => {
    return action$.ofType(typeConstants.CHANGE_HIP_GIRTH_VALUE)
      .map((action: any) => {
        const curVal: number = parseInt((action.value).toFixed(0), 10);
        return humanSizesActions.changeSvgHipGirthValue({
          leftHipPath: `M124.966443,332.727506 ` +
          `C${(curVal / 0.6).toFixed(0)}.502323,274.866619 ` +
          `${(curVal / 0.63).toFixed(0)}.513508,234.624117 ` +
          `${(curVal / 0.63636).toFixed(0)},212 ` +
          `C${(curVal / 0.6542).toFixed(0)}.179962,169.845707 ` +
          `${(curVal / 0.686).toFixed(0)}.337679,135.213201 ` +
          `${(curVal / 0.707).toFixed(0)}.7002812,125 ` +
          `C${(curVal / 0.76).toFixed(0)}.5593416,97.3470437 ` +
          `80.6561987,8.72294666 74.4341195,0.693687789`,

          rightHipPath: `M20,1 ` +
          `C${(87 - curVal).toFixed(0)}.8433291,-5 ` +
          `${(71 - curVal).toFixed(0)}.63359908,54.6309689 ` +
          `${(71 - curVal).toFixed(0)},86 ` +
          `C${(70 - curVal).toFixed(0)}.842242598,93.8104547 ` +
          `${(69 - curVal).toFixed(0)}.49947267,129.173396 ` +
          `${(87 - curVal).toFixed(0)}.8333333,198 ` +
          `C${(93 - curVal).toFixed(0)}.925338,219.688108 29.5989491,257.308756 34.8541667,310.861942`,
        });
      });
  };
