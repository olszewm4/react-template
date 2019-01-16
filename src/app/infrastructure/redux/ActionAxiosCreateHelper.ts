import { wrapAxiosAction, CallbacksConfig } from './ActionAsyncCreateHelper';
import { AppActionTypes } from './AppActionTypes';
import axios, { AxiosRequestConfig } from 'axios';
import { ThunkDispatch } from 'redux-thunk';

export function createRequestAction<T extends AppActionTypes, P>(config: AxiosRequestConfig, type: T, callbacks: CallbacksConfig): (dispatch: ThunkDispatch<any, any, any>) => void {
    return wrapAxiosAction(() => axios.request<P>(config), type, callbacks);
};

export function createGetAction<T extends AppActionTypes, P>(url: string, type: T, callbacks: CallbacksConfig, config?: AxiosRequestConfig): (dispatch: ThunkDispatch<any, any, any>) => void {
    return wrapAxiosAction(() => axios.get<P>(url, config), type, callbacks);
}

export function createDeleteAction<T extends AppActionTypes, P>(url: string, type: T, callbacks: CallbacksConfig, config?: AxiosRequestConfig): (dispatch: ThunkDispatch<any, any, any>) => void {
    return wrapAxiosAction(() => axios.delete(url, config), type, callbacks);
}

export function createHeadAction<T extends AppActionTypes, P>(url: string, type: T, callbacks: CallbacksConfig, config?: AxiosRequestConfig): (dispatch: ThunkDispatch<any, any, any>) => void {
    return wrapAxiosAction(() => axios.head(url, config), type, callbacks);
}

export function createPostAction<T extends AppActionTypes, P, D>(url: string, type: T, callbacks: CallbacksConfig, data?: D, config?: AxiosRequestConfig): (dispatch: ThunkDispatch<any, any, any>) => void {
    return wrapAxiosAction(() => axios.post<P>(url, data, config), type, callbacks);
}

export function createPutAction<T extends AppActionTypes, P, D>(url: string, type: T, callbacks: CallbacksConfig, data?: D, config?: AxiosRequestConfig): (dispatch: ThunkDispatch<any, any, any>) => void {
    return wrapAxiosAction(() => axios.put<P>(url, data, config), type, callbacks);
}

export function createPatchAction<T extends AppActionTypes, P, D>(url: string, type: T, callbacks: CallbacksConfig, data?: D, config?: AxiosRequestConfig): (dispatch: ThunkDispatch<any, any, any>) => void {
    return wrapAxiosAction(() => axios.patch<P>(url, data, config), type, callbacks);
}