import { Task } from './typings';

export interface TasksPageState {
    isTasksBeingLoaded: boolean,
    error: any,
    tasks: Task[],
}