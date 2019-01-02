import { StatisticsState } from './modules/statistics/StatisticsState';
import { ProfileMenuState } from '../../components/menu/components/secondaryMenu/components/profileMenu/ProfileMenuState';
import { SecondaryMenuState } from '../../components/menu/components/secondaryMenu/SecondaryMenuState';
import { PrimaryMenuState } from '../../components/menu/components/primaryMenu/PrimaryMenuState';
import { LanguageMenuState } from '../../components/menu/components/secondaryMenu/components/languageMenu/LanguageMenuState';

// tslint:disable-next-line:interface-name
export interface ApplicationState {
    ProfileMenuState: ProfileMenuState,
    SecondaryMenuState: SecondaryMenuState,
    PrimaryMenuState: PrimaryMenuState,
    LanguageMenuState: LanguageMenuState,
    StatisticsState: StatisticsState
}