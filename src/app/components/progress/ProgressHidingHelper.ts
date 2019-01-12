import { Component } from 'react';
import { ProgressProps, ProgressState } from './typings';

export class ProgressHidingHelper {
    
    public static hide = (progressComponent: Component<ProgressProps, ProgressState>): NodeJS.Timeout => {
        return setTimeout(() => {
            if (progressComponent.state.numberOfRequestsInCurrentProgress === 0) {
                progressComponent.setState({ isVisible: false, currentPercentageProgress: 0 });
            }
            else {
                progressComponent.setState({ currentPercentageProgress: 0 });
            }
        }, 500);
    }

    public static dispose = (progressComponent: Component<ProgressProps, ProgressState>): void => {
        if (progressComponent.state.animationTimeoutId !== undefined) {
            clearTimeout(progressComponent.state.animationTimeoutId);
            progressComponent.setState({ animationTimeoutId: undefined });
        }
    }
}