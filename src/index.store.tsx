import { combineReducers } from 'redux';
import { InitialProfileMenuState, ProfileMenuReducer } from './app/components/menu/components/secondaryMenu/components/profileMenu/ProfileMenuReducer';
import { ProfileMenuState } from './app/components/menu/components/secondaryMenu/components/profileMenu/ProfileMenuState';
import { InitialSecondaryMenuState, SecondaryMenuReducer } from './app/components/menu/components/secondaryMenu/SecondaryMenuReducer';
import { SecondaryMenuState } from './app/components/menu/components/secondaryMenu/SecondaryMenuState';

// tslint:disable:interface-name

export interface ApplicationState {
    ProfileMenuState: ProfileMenuState,
    SecondaryMenuState: SecondaryMenuState
}

export const InitialApplicationState: ApplicationState = {
    ProfileMenuState: InitialProfileMenuState,
    SecondaryMenuState: InitialSecondaryMenuState
}

export const combinedReducers = combineReducers<ApplicationState>({
    ProfileMenuState: ProfileMenuReducer,
    SecondaryMenuState: SecondaryMenuReducer
});
