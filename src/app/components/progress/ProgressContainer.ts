import { connect } from 'react-redux';
import ProgressComponent from './ProgressComponent';
import { ProgressStateProps } from './typings';
import { ApplicationState } from '../../infrastructure/redux/ApplicationState';

const mapStateToProps = ({ StatisticsState }: ApplicationState) : ProgressStateProps => ({
    numberOfActiveRequests: StatisticsState.numberOfActiveRequests
});
  

export default connect<ProgressStateProps, any, any, any>
  (mapStateToProps, null)(ProgressComponent);