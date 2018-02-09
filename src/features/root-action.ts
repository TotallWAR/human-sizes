// RootActions
import { RouterAction, LocationChangeAction } from 'react-router-redux';
import { getReturnOfExpression } from 'utility-types';

import {humanSizesActions} from './human-sizes';

export const actions = {
  humanSizes: humanSizesActions,
};

const returnsOfActions = [
  ...Object.values(humanSizesActions),
].map(getReturnOfExpression);

type AppAction = typeof returnsOfActions[number];
type ReactRouterAction = RouterAction | LocationChangeAction;

export type RootAction =
  | AppAction
  | ReactRouterAction;
