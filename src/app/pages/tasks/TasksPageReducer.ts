import { Action } from 'redux';
import { TasksPageState } from './TasksPageState';
import { TasksPageActionTypes } from './actions/TasksPageActionTypes';
import { AsyncAction, AsyncActionStatus, AsyncActionWithPayLoad } from '../../infrastructure/redux/ActionAsyncCreateHelper';
import { Task } from './typings';

const InitialTasksPageState: TasksPageState = {
    error: undefined,
    isTasksBeingLoaded: false,
    tasks: []
};

export const TasksPageReducer = (state: TasksPageState = InitialTasksPageState, action: Action<TasksPageActionTypes>) : TasksPageState => {
    switch(action.type){
        case TasksPageActionTypes.GetTasks:

        switch((action as AsyncAction<TasksPageActionTypes>).status)
        {
            case AsyncActionStatus.Before:
                return {
                    ...state,
                    isTasksBeingLoaded: true,
                };
            case AsyncActionStatus.Succeded:
                return {
                    ...state,
                    tasks: (action as AsyncActionWithPayLoad<TasksPageActionTypes, Task[]>).payload,
                    error: undefined
                };
            case AsyncActionStatus.Failed:
                return {
                    ...state,
                    error: (action as AsyncActionWithPayLoad<TasksPageActionTypes, any>).payload
                };
            case AsyncActionStatus.Done:
                return {
                    ...state,
                    isTasksBeingLoaded: false
                };
            default:
                return state;
        }
        default:
            return state;
    }
};