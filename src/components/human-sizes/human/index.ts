import { connect } from 'react-redux';
import {RootState} from 'Features/root-reducer';
import Human from './human';

const mapStateToProps = (state: RootState) => ({
  hipGirthPath: state.humanSizes.hipGirthSvg,
  chestGirthPath: state.humanSizes.chestGirthSvg,
  waistGirthPath: state.humanSizes.waistGirthSvg,
});

const HumanConnectedVerbose = connect(mapStateToProps)(Human);
export default HumanConnectedVerbose;
