export interface ProgressStateProps {
    numberOfActiveRequests: number,
}

export class ProgressState {
    public isVisible: boolean = false;
    public willBeInvisible: boolean = false;
    public numberOfRequestsInCurrentProgress: number = 0;
    public currentPercentageProgress: number = 0;
}

export type ProgressProps = ProgressStateProps;
