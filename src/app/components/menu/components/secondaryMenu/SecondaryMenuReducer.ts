import { Action } from 'redux';
import { SecondaryMenuActionTypes } from './actions/SecondaryMenuActionTypes';
import { ProfileMenuActionTypes } from './components/profileMenu/actions/ProfileMenuActions';
import { SecondaryMenuState } from './SecondaryMenuState';
import { AppActionTypes } from '../../../../infrastructure/redux/AppActionTypes';
import { ActionWithPayLoad } from '../../../../infrastructure/redux/ActionCreateHelper';

const InitialSecondaryMenuState: SecondaryMenuState = {
    anchorElement: null
}

export const SecondaryMenuReducer = (state: SecondaryMenuState = InitialSecondaryMenuState, action: Action<AppActionTypes>) : SecondaryMenuState => {
    switch(action.type){
        case SecondaryMenuActionTypes.OpenSecondaryMenu:
            return {
                ...state,
                anchorElement: (action as ActionWithPayLoad<SecondaryMenuActionTypes, any>).payload
            };
        case SecondaryMenuActionTypes.CloseSecondaryMenu:
        case ProfileMenuActionTypes.CloseProfileMenu:
            return {
                ...state,
                anchorElement: null
            };
        default:
            return state;
    }
};