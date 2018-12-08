import { Action } from 'redux';
import { ActionWithPayLoad } from './../../../../../../common/ActionCreateHelper';
import { ProfileMenuActionTypes } from './actions/ProfileMenuActions';
import { ProfileMenuState } from './ProfileMenuState';

export const InitialProfileMenuState: ProfileMenuState = {
    anchorElement: null
}

export const ProfileMenuReducer = (state: ProfileMenuState = InitialProfileMenuState, action: Action<ProfileMenuActionTypes>) : ProfileMenuState => {
    switch(action.type){
        case ProfileMenuActionTypes.OpenProfileMenu:
            return {
                ...state,
                anchorElement: (action as ActionWithPayLoad<ProfileMenuActionTypes, any>).payload
            };
        case ProfileMenuActionTypes.CloseProfileMenu:
            return {
                ...state,
                anchorElement: null
            };
        default:
            return state;
    }
};