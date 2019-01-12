import { ProgressProps, ProgressState } from './typings';

export default class ProgressPropsToStateMapper {

    private nextProps: ProgressProps;
    private prevState: ProgressState;

    /**
     *
     */
    constructor(nextProps: ProgressProps, prevState: ProgressState) {
        this.nextProps = nextProps;
        this.prevState = prevState;
    }

    public Map(): ProgressState | null {
        if(!this.isNumberOfRequestsChanged()){
            return null;
        }

        const state: ProgressState = { ...this.prevState, numberOfRequestsInCurrentProgress: this.nextProps.numberOfActiveRequests };
        if(ProgressPropsToStateMapper.shouldProgressBeHidden(this.prevState)){
            return state;
        }

        if(this.hasNumberOfRequestsRisen()){
            this.handleNumberOfRequestsRise(state);
        }
        else if(this.hasNumberOfRequestsFallen()){
            this.handleNumberOfRequestsFall(state);
        }

        return state;
    }

    public static shouldProgressBeHidden(state: ProgressState){
        return state.currentPercentageProgress === 100;
    }

    private isNumberOfRequestsChanged(){
        return this.prevState.numberOfRequestsInCurrentProgress !== this.nextProps.numberOfActiveRequests;
    }

    private hasNumberOfRequestsRisen(){
        return this.prevState.numberOfRequestsInCurrentProgress < this.nextProps.numberOfActiveRequests;
    }

    private hasNumberOfRequestsFallen(){
        return this.prevState.numberOfRequestsInCurrentProgress > this.nextProps.numberOfActiveRequests;
    }

    private handleNumberOfRequestsRise(state: ProgressState){
        state.isVisible = true;
    }

    private handleNumberOfRequestsFall(state: ProgressState){
        state.isVisible = true;
        state.currentPercentageProgress = Math.min(this.prevState.currentPercentageProgress + 
            Math.ceil((100 - this.prevState.currentPercentageProgress) / this.prevState.numberOfRequestsInCurrentProgress), 100);
    }
}