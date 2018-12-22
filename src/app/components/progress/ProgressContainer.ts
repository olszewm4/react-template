import { connect } from 'react-redux';
import { ApplicationState } from 'src/index.store';
import ProgressComponent from './ProgressComponent';
import { ProgressStateProps } from './typings';

const mapStateToProps = ({ StatisticsState }: ApplicationState) : ProgressStateProps => ({
    numberOfActiveRequests: StatisticsState.numberOfActiveRequests
});
  

export default connect<ProgressStateProps, any, any>
  (mapStateToProps, null)(ProgressComponent);