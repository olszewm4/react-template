import { combineReducers } from 'redux';
import { PrimaryMenuReducer } from './app/components/menu/components/primaryMenu/PrimaryMenuReducer';
import { PrimaryMenuState } from './app/components/menu/components/primaryMenu/PrimaryMenuState';
import { LanguageMenuReducer } from './app/components/menu/components/secondaryMenu/components/languageMenu/LanguageMenuReducer';
import { LanguageMenuState } from './app/components/menu/components/secondaryMenu/components/languageMenu/LanguageMenuState';
import { ProfileMenuReducer } from './app/components/menu/components/secondaryMenu/components/profileMenu/ProfileMenuReducer';
import { ProfileMenuState } from './app/components/menu/components/secondaryMenu/components/profileMenu/ProfileMenuState';
import { SecondaryMenuReducer } from './app/components/menu/components/secondaryMenu/SecondaryMenuReducer';
import { SecondaryMenuState } from './app/components/menu/components/secondaryMenu/SecondaryMenuState';
import { StatisticsReducer } from './app/infrastructure/redux/modules/statistics/StatisticsReducer';
import { StatisticsState } from './app/infrastructure/redux/modules/statistics/StatisticsState';

// tslint:disable:interface-name
// tslint:disable:object-literal-sort-keys

export interface ApplicationState {
    ProfileMenuState: ProfileMenuState,
    SecondaryMenuState: SecondaryMenuState,
    PrimaryMenuState: PrimaryMenuState,
    LanguageMenuState: LanguageMenuState,
    StatisticsState: StatisticsState
}

export const combinedReducers = combineReducers<ApplicationState>({
    PrimaryMenuState: PrimaryMenuReducer,
    ProfileMenuState: ProfileMenuReducer,
    SecondaryMenuState: SecondaryMenuReducer,
    LanguageMenuState: LanguageMenuReducer,
    StatisticsState: StatisticsReducer
});
