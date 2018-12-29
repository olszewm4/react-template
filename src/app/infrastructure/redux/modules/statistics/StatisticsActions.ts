import { createAction } from "src/app/infrastructure/redux/ActionCreateHelper";
import { StatisticsActionTypes } from './StatisticsActionTypes';


export const NewRequestAction = () => createAction<StatisticsActionTypes>(StatisticsActionTypes.NewRequest);
export const RequestCompletedAction = () => createAction<StatisticsActionTypes>(StatisticsActionTypes.RequestCompleted);