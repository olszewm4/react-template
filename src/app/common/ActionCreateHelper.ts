import { Action } from 'redux';
import { AppActionTypes } from '../actions/AppActionTypes';

// tslint:disable-next-line:interface-name
export interface ActionWithPayLoad<T extends AppActionTypes, P> extends Action<T> {
    payload: P
}

export function createAction<T extends AppActionTypes>(type: T): Action<T>;
export function createAction<T extends AppActionTypes, P>(type: T, payload: P): ActionWithPayLoad<T, P>;
export function createAction<T extends AppActionTypes, P>(type: T, payload?: P) {
    return payload === undefined ? { type } : { type, payload };
}

