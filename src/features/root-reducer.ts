import { combineReducers } from 'redux';
import { routerReducer as router, RouterState } from 'react-router-redux';

import { reducer as humanSizes, State as HumanSizesState } from './human-sizes';

interface StoreEnhancerState { }

export interface RootState extends StoreEnhancerState {
  router: RouterState;
  humanSizes: HumanSizesState;
}

import { RootAction } from './root-action';
export const rootReducer = combineReducers<RootState, RootAction>({
  router,
  humanSizes,
});
