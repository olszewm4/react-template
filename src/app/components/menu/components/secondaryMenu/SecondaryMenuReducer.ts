import { Action } from 'redux';
import { AppActionTypes } from 'src/app/actions/AppActionTypes';
import { ActionWithPayLoad } from 'src/app/common/ActionCreateHelper';
import { SecondaryMenuActionTypes } from './actions/SecondaryMenuActionTypes';
import { ProfileMenuActionTypes } from './components/profileMenu/actions/ProfileMenuActions';
import { SecondaryMenuState } from './SecondaryMenuState';

export const InitialSecondaryMenuState: SecondaryMenuState = {
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