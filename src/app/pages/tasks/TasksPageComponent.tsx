import React, { ReactNode, PureComponent } from 'react'
import { TasksPageProps, Task } from './typings';

export default class TasksPageComponent extends PureComponent<TasksPageProps> {
    public render = (): ReactNode => {
        if (this.props.isTasksListBeingLoaded === true) {
            return (
                <div>Ładowanie zadań</div>
            );
        }
        else if (this.props.error !== undefined) {
            return (
                <div>Błąd: {this.props.error.toString()}</div>
            );
        }
        else {
            return (
                <table>
                    {this.props.tasks.map((value: Task, index: number) =>
                        <tr key={index}><td>{value.id}</td><td>{value.name}</td></tr>
                    )}
                </table>
            );
        }
    }

    public componentDidMount = (): void => {
        this.props.GetTasks();
    }
}
