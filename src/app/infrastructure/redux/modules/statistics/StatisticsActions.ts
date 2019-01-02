import { StatisticsActionTypes } from './StatisticsActionTypes';
import { createAction } from '../../ActionCreateHelper';


export const NewRequestAction = () => createAction<StatisticsActionTypes>(StatisticsActionTypes.NewRequest);
export const RequestCompletedAction = () => createAction<StatisticsActionTypes>(StatisticsActionTypes.RequestCompleted);