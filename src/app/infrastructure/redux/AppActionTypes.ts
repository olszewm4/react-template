import { PrimaryMenuActionTypes } from '../../components/menu/components/primaryMenu/actions/PrimaryMenuActionTypes';
import { SecondaryMenuActionTypes } from '../../components/menu/components/secondaryMenu/actions/SecondaryMenuActionTypes';
import { LanguageMenuActionTypes } from '../../components/menu/components/secondaryMenu/components/languageMenu/actions/LanguageMenuActionTypes';
import { ProfileMenuActionTypes } from '../../components/menu/components/secondaryMenu/components/profileMenu/actions/ProfileMenuActions';
import { StatisticsActionTypes } from './modules/statistics/StatisticsActionTypes';

export type AppActionTypes =  
    ProfileMenuActionTypes |
    SecondaryMenuActionTypes |
    PrimaryMenuActionTypes |
    LanguageMenuActionTypes |
    StatisticsActionTypes;


