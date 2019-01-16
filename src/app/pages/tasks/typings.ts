
export interface Task {
    id: number,
    name: string
}

export interface TasksPageStateProps {
    isTasksListBeingLoaded: boolean,
    error: any,
    tasks: Task[],
}

export interface TasksPageDispatchProps {
    GetTasks(): void;
}


export type TasksPageProps = TasksPageDispatchProps & TasksPageStateProps;