import { Action } from 'redux';
import { AppActionTypes } from 'src/app/infrastructure/redux/AppActionTypes';
import { PrimaryMenuActionTypes } from './actions/PrimaryMenuActionTypes';
import { PrimaryMenuState } from './PrimaryMenuState';

export const InitialPrimaryMenuState: PrimaryMenuState = {
    isOpen: false
}

export const PrimaryMenuReducer = (state: PrimaryMenuState = InitialPrimaryMenuState, action: Action<AppActionTypes>) : PrimaryMenuState => {
    switch(action.type){
        case PrimaryMenuActionTypes.OpenPrimaryMenu:
            return {
                ...state,
                isOpen: true
            };
        case PrimaryMenuActionTypes.ClosePrimaryMenu:
            return {
                ...state,
                isOpen: false
            };
        default:
            return state;
    }
};