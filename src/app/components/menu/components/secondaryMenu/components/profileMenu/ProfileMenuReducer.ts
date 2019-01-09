import { Action } from 'redux';
import { ActionWithPayLoad } from '../../../../../../infrastructure/redux/ActionCreateHelper';
import { ProfileMenuActionTypes } from './actions/ProfileMenuActions';
import { ProfileMenuState } from './ProfileMenuState';

const InitialProfileMenuState: ProfileMenuState = {
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