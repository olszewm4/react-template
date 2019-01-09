import { Component } from 'react';
import { ProgressProps } from './typings';

export class ProgressHidingHelper {

    private timeoutId: NodeJS.Timeout | undefined;
    private progressComponent: Component<ProgressProps, any>;

    /**
     *
     */
    constructor(progressComponent: Component<ProgressProps, any>) {
        this.progressComponent = progressComponent;
    }

    public hide = (): void => {
        this.timeoutId = setTimeout(() => {
            if (this.progressComponent.state.numberOfRequestsInCurrentProgress === 0) {
                this.progressComponent.setState({ isVisible: false, currentPercentageProgress: 0 });
            }
            else {
                this.progressComponent.setState({ currentPercentageProgress: 0 });
            }
        }, 500);
    }

    public dispose = (): void => {
        if (this.timeoutId !== undefined) {
            clearTimeout(this.timeoutId);
        }
    }
}