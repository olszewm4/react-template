import { PrimaryMenuState } from 'src/app/components/menu/components/primaryMenu/PrimaryMenuState';
import { LanguageMenuState } from 'src/app/components/menu/components/secondaryMenu/components/languageMenu/LanguageMenuState';
import { ProfileMenuState } from 'src/app/components/menu/components/secondaryMenu/components/profileMenu/ProfileMenuState';
import { SecondaryMenuState } from 'src/app/components/menu/components/secondaryMenu/SecondaryMenuState';
import { StatisticsState } from './modules/statistics/StatisticsState';

// tslint:disable-next-line:interface-name
export interface ApplicationState {
    ProfileMenuState: ProfileMenuState,
    SecondaryMenuState: SecondaryMenuState,
    PrimaryMenuState: PrimaryMenuState,
    LanguageMenuState: LanguageMenuState,
    StatisticsState: StatisticsState
}