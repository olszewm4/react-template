import axios, { AxiosRequestConfig } from 'axios';
import { AnyAction, Store } from 'redux';
import { ApplicationState } from 'src/app/infrastructure/redux/ApplicationState';
import { NewRequestAction, RequestCompletedAction } from 'src/app/infrastructure/redux/modules/statistics/StatisticsActions';

export class InterceptorsService {

    // -------------- Delay for debug purposes ----------------
    // public static numberOfRequests: number = 0;

    public static setup = (store: Store<ApplicationState, AnyAction>) => {
        axios.interceptors.request.use((config: AxiosRequestConfig) => {
            // -------------- Delay for debug purposes ----------------
            // InterceptorsService.numberOfRequests++;
            store.dispatch(NewRequestAction());
            return config;
        });

        axios.interceptors.response.use(response => {
            // -------------- Delay for debug purposes ----------------
            // return new Promise((resolve, reject) => {
            //     InterceptorsService.numberOfRequests--;

            //     setTimeout(() => {
            //         store.dispatch(RequestCompletedAction());
            //         resolve(response)
            //     }, 3000 / InterceptorsService.numberOfRequests);
            // });

            store.dispatch(RequestCompletedAction());
            return response;
        })
    }
}