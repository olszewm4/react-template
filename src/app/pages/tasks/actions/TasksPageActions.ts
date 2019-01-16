import { TasksPageActionTypes } from './TasksPageActionTypes';
import { createGetAction } from '../../../infrastructure/redux/ActionAxiosCreateHelper';
import { Task } from '../typings';

export const GetTasksAction = () => createGetAction<TasksPageActionTypes, Task[]>("./data/tasks.json", TasksPageActionTypes.GetTasks, { before: true, succeded: true, failed: true, done: true });