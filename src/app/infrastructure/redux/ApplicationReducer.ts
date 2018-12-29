import { combineReducers } from 'redux';
import { PrimaryMenuReducer } from 'src/app/components/menu/components/primaryMenu/PrimaryMenuReducer';
import { LanguageMenuReducer } from 'src/app/components/menu/components/secondaryMenu/components/languageMenu/LanguageMenuReducer';
import { ProfileMenuReducer } from 'src/app/components/menu/components/secondaryMenu/components/profileMenu/ProfileMenuReducer';
import { SecondaryMenuReducer } from 'src/app/components/menu/components/secondaryMenu/SecondaryMenuReducer';
import { ApplicationState } from './ApplicationState';
import { StatisticsReducer } from './modules/statistics/StatisticsReducer';

// tslint:disable:object-literal-sort-keys

export const ApplicationReducer = combineReducers<ApplicationState>({
    PrimaryMenuState: PrimaryMenuReducer,
    ProfileMenuState: ProfileMenuReducer,
    SecondaryMenuState: SecondaryMenuReducer,
    LanguageMenuState: LanguageMenuReducer,
    StatisticsState: StatisticsReducer
});