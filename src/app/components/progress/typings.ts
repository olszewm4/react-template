import { StyledComponentProps } from '@material-ui/core/styles/withStyles';

export interface ProgressState {
    isVisible: boolean;
    numberOfRequestsInCurrentProgress: number;
    currentPercentageProgress: number;
    animationTimeoutId: NodeJS.Timeout | undefined;
}

export interface ProgressStateProps {
    numberOfActiveRequests: number
}

export type ProgressProps = ProgressStateProps & StyledComponentProps;
