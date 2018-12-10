import { combineReducers } from 'redux';
import { InitialPrimaryMenuState, PrimaryMenuReducer } from './app/components/menu/components/primaryMenu/PrimaryMenuReducer';
import { PrimaryMenuState } from './app/components/menu/components/primaryMenu/PrimaryMenuState';
import { InitialProfileMenuState, ProfileMenuReducer } from './app/components/menu/components/secondaryMenu/components/profileMenu/ProfileMenuReducer';
import { ProfileMenuState } from './app/components/menu/components/secondaryMenu/components/profileMenu/ProfileMenuState';
import { InitialSecondaryMenuState, SecondaryMenuReducer } from './app/components/menu/components/secondaryMenu/SecondaryMenuReducer';
import { SecondaryMenuState } from './app/components/menu/components/secondaryMenu/SecondaryMenuState';

// tslint:disable:interface-name

export interface ApplicationState {
    ProfileMenuState: ProfileMenuState,
    SecondaryMenuState: SecondaryMenuState,
    PrimaryMenuState: PrimaryMenuState 
}

export const InitialApplicationState: ApplicationState = {
    PrimaryMenuState: InitialPrimaryMenuState,
    ProfileMenuState: InitialProfileMenuState,
    SecondaryMenuState: InitialSecondaryMenuState,
}

export const combinedReducers = combineReducers<ApplicationState>({
    PrimaryMenuState: PrimaryMenuReducer,
    ProfileMenuState: ProfileMenuReducer,
    SecondaryMenuState: SecondaryMenuReducer,
});
