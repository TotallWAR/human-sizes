import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import {RootState} from 'Features/root-reducer';
import {humanSizesActions} from '../../features/human-sizes';
import HumanSizes from './human-sizes';
import './index.scss';

const mapStateToProps = (state: RootState) => ({
  chestGirth: state.humanSizes.chestGirth,
  growth: state.humanSizes.growth,
  hipGirth: state.humanSizes.hipGirth,
  waistGirth: state.humanSizes.waistGirth,
  weight: state.humanSizes.weight,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
  changeSize: humanSizesActions.changeSize,
}, dispatch);

const HumanSizesConnectedVerbose = connect(mapStateToProps, mapDispatchToProps)(HumanSizes);
export default HumanSizesConnectedVerbose;
