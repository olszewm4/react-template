import { AxiosPromise } from 'axios';
import { AppActionTypes } from './AppActionTypes';
import { ThunkDispatch } from 'redux-thunk';
import { ActionWithPayLoad } from './ActionCreateHelper';
import { Action } from 'redux';

export enum AsyncActionStatus {
    Before = 'AsyncActionStatus.Before',
    Succeded = 'AsyncActionStatus.Succeded',
    Failed = 'AsyncActionStatus.Failed',
    Done = 'AsyncActionStatus.Done'
}

export interface CallbacksConfig {
    before?: boolean,
    succeded?: boolean,
    failed?: boolean,
    done?: boolean
}

// Actions

export interface AsyncAction<T extends AppActionTypes> extends Action<T> {
    status: AsyncActionStatus
}
export interface AsyncActionWithPayLoad<T extends AppActionTypes, P> extends ActionWithPayLoad<T, P>, AsyncAction<T> {
}

// Action Creators

export function createAsyncAction<T extends AppActionTypes>(type: T, status: AsyncActionStatus): AsyncAction<T>;
export function createAsyncAction<T extends AppActionTypes, P>(type: T, status: AsyncActionStatus, payload: P): AsyncActionWithPayLoad<T, P>;
export function createAsyncAction<T extends AppActionTypes, P>(type: T, status: AsyncActionStatus, payload?: P) {
    return payload === undefined ? { type, status } : { type, status, payload };
}

export const AsyncActionBefore = <T extends AppActionTypes>(type: T) => createAsyncAction<T>(type, AsyncActionStatus.Before);
export const AsyncActionSucceded = <T extends AppActionTypes, P>(type: T, payload: P) => createAsyncAction<T, P>(type, AsyncActionStatus.Succeded, payload);
export const AsyncActionFailed = <T extends AppActionTypes, P>(type: T, payload: P) => createAsyncAction<T, P>(type, AsyncActionStatus.Failed, payload);
export const AsyncActionDone = <T extends AppActionTypes>(type: T) => createAsyncAction<T>(type, AsyncActionStatus.Done);

export function wrapAxiosAction<T extends AppActionTypes, P>(
    axiosFunction: () => AxiosPromise<P>,
    type: T,
    callbacks: CallbacksConfig): (dispatch: ThunkDispatch<any, any, any>) => void {

    return async (dispatch: ThunkDispatch<any, any, any>) => {
        if (callbacks.before === true) {
            dispatch(AsyncActionBefore(type));
        }

        try {
            const response = await axiosFunction();
            if (callbacks.succeded === true) {
                dispatch(AsyncActionSucceded<T, P>(type, response.data));
            }
        } catch (error) {
            if (callbacks.failed === true) {
                dispatch(AsyncActionFailed<T, any>(type, error));
            }
        }
        finally {
            if (callbacks.done === true) {
                dispatch(AsyncActionDone(type));
            }
        }
    };
}