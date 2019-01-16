import { GetTasksAction } from './actions/TasksPageActions';
import { ApplicationState } from '../../infrastructure/redux/ApplicationState';
import { TasksPageStateProps, TasksPageDispatchProps } from './typings';
import { ThunkDispatch } from 'redux-thunk';
import TasksPageComponent from './TasksPageComponent';
import { connect } from 'react-redux';

const mapStateToProps = ({ TasksPageState }: ApplicationState) : TasksPageStateProps => ({
    error: TasksPageState.error,
    isTasksListBeingLoaded: TasksPageState.isTasksBeingLoaded,
    tasks: TasksPageState.tasks
});
  
const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, any>) : TasksPageDispatchProps => ({
    GetTasks: () => dispatch(GetTasksAction())
});


export default connect<TasksPageStateProps, TasksPageDispatchProps, any, any>(mapStateToProps, mapDispatchToProps)(TasksPageComponent);