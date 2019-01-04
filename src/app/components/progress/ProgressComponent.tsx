import { LinearProgress } from '@material-ui/core';
import { PureComponent } from 'react';
import * as React from 'react';
import { ProgressProps, ProgressState } from './typings';
import * as globalOthersStyles from './../../infrastructure/content/global.others.module.css';

export default class ProgressComponent extends PureComponent<ProgressProps, ProgressState> {

    public static getDerivedStateFromProps(nextProps: ProgressProps, prevState: ProgressState): ProgressState | null {
        if (prevState.numberOfRequestsInCurrentProgress === nextProps.numberOfActiveRequests) {
            return null;
        }

        const nextState: ProgressState = { ...prevState, numberOfRequestsInCurrentProgress: nextProps.numberOfActiveRequests };
        if (nextState.willBeInvisible) {
            return nextState;
        }

        if (prevState.numberOfRequestsInCurrentProgress < nextProps.numberOfActiveRequests) {
            nextState.isVisible = true;
            if (nextProps.numberOfActiveRequests === 1) {
                nextState.currentPercentageProgress = 0;
            }
        }
        else if (prevState.numberOfRequestsInCurrentProgress > nextProps.numberOfActiveRequests) {
            nextState.isVisible = true;
            nextState.currentPercentageProgress = Math.min(prevState.currentPercentageProgress + Math.ceil((100 - prevState.currentPercentageProgress) / prevState.numberOfRequestsInCurrentProgress), 100);
            nextState.willBeInvisible = nextState.currentPercentageProgress === 100;
        }

        return nextState;
    }

    private progressVisibilityTimer: any;

    /**
     *
     */
    constructor(props: ProgressProps, context?: any) {
        super(props, context);
        this.state = new ProgressState();
    }

    public shouldComponentUpdate = (nextProps: Readonly<ProgressProps>, nextState: Readonly<ProgressState>): boolean => {
        return this.state.isVisible !== nextState.isVisible ||
            this.state.currentPercentageProgress !== nextState.currentPercentageProgress;
    }

    public componentDidUpdate = (prevProps: Readonly<ProgressProps>, prevState: Readonly<ProgressState>): void => {
        if (this.state.currentPercentageProgress === 100) {
            this.hideProgress();
        }
    }

    public componentWillUnmount = () => {
        this.clearVisibilityTimer();
    }

    public render = () => {
        if (!this.state.isVisible) {
            return (<React.Fragment />);
        }
        else {
            const classes = { bar1Determinate: "" };
            if(this.state.currentPercentageProgress === 0){
                classes.bar1Determinate = globalOthersStyles["no-transition"];
            }
            
            return (
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0 }}>
                    <LinearProgress color="secondary" variant="determinate" value={this.state.currentPercentageProgress} classes={classes} style={{zIndex: 99999}} />
                </div>
            );
        }
    }

    private hideProgress = (): void => {
        this.progressVisibilityTimer = setTimeout(() => {
            if(this.state.numberOfRequestsInCurrentProgress === 0){
                this.setState({ isVisible: false, willBeInvisible: false, currentPercentageProgress: 0});
            }
            else {
                this.setState({ willBeInvisible: false, currentPercentageProgress: 0});
            }
        }, 500);
    }

    private clearVisibilityTimer = (): void => {
        if (this.progressVisibilityTimer) {
            clearTimeout(this.progressVisibilityTimer);
        }
    }
}
