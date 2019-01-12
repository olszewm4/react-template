import { LinearProgress, withStyles } from '@material-ui/core';
import { Component, ReactNode } from 'react';
import * as React from 'react';
import { ProgressProps, ProgressState } from './typings';
import * as globalOthersStyles from './../../infrastructure/content/global.others.module.css';
import ProgressPropsToStateMapper from './ProgressPropsToStateMapper';
import { ProgressStyles } from './content/styles';
import * as ProgressStylesModule from './content/progress.module.css';
import { ProgressHidingHelper } from './ProgressHidingHelper';

class ProgressComponent extends Component<ProgressProps, ProgressState> {

    public readonly state: Readonly<ProgressState> = {
        animationTimeoutId: undefined,
        isVisible: false,
        numberOfRequestsInCurrentProgress: 0,
        currentPercentageProgress: 0
    }

    public render = () : ReactNode => {
        if (!this.state.isVisible) {
            return (<React.Fragment />);
        }
        else {
            const classes = {...this.props.classes as Record<string, string>}
            // to avoid coming back progress with transition
            if (this.areAllRequestPending()) {
                classes.bar1Determinate = globalOthersStyles["no-transition"];
            }

            return (
                <div className={ProgressStylesModule.progressContainer}>
                    <LinearProgress color="secondary" variant="determinate" value={this.state.currentPercentageProgress} classes={classes} />
                </div>
            );
        }
    }

    public static getDerivedStateFromProps(nextProps: ProgressProps, prevState: ProgressState): ProgressState | null {
        const mapper = new ProgressPropsToStateMapper(nextProps, prevState);
        return mapper.Map();
    }

    public shouldComponentUpdate = (nextProps: Readonly<ProgressProps>, nextState: Readonly<ProgressState>): boolean => {
        return this.state.isVisible !== nextState.isVisible || this.state.currentPercentageProgress !== nextState.currentPercentageProgress;
    }

    public componentDidUpdate = (prevProps: Readonly<ProgressProps>, prevState: Readonly<ProgressState>): void => {
        if (ProgressPropsToStateMapper.shouldProgressBeHidden(this.state)) {
            ProgressHidingHelper.hide(this);
        }
    }

    public componentWillUnmount = () => {
        ProgressHidingHelper.dispose(this);
    }

    private areAllRequestPending = () : boolean => {
        return this.state.currentPercentageProgress === 0;
    }
}

export default withStyles(ProgressStyles)(ProgressComponent);
