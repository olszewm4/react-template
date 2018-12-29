import { Action } from 'redux';
import { StatisticsActionTypes } from './StatisticsActionTypes';
import { StatisticsState } from './StatisticsState';

const InitialStatisticsState: StatisticsState = {
    numberOfActiveRequests: 0
}

export const StatisticsReducer = (state: StatisticsState = InitialStatisticsState, action: Action<StatisticsActionTypes>): StatisticsState => {
    switch (action.type) {
        case StatisticsActionTypes.NewRequest:
            return {
                ...state,
                numberOfActiveRequests: state.numberOfActiveRequests + 1
            };
        case StatisticsActionTypes.RequestCompleted:
            return {
                ...state,
                numberOfActiveRequests: state.numberOfActiveRequests - 1
            };
        default:
            return state;
    }
}