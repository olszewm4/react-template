import { PrimaryMenuActionTypes } from '../components/menu/components/primaryMenu/actions/PrimaryMenuActionTypes';
import { SecondaryMenuActionTypes } from '../components/menu/components/secondaryMenu/actions/SecondaryMenuActionTypes';
import { LanguageMenuActionTypes } from '../components/menu/components/secondaryMenu/components/languageMenu/actions/LanguageMenuActionTypes';
import { ProfileMenuActionTypes } from '../components/menu/components/secondaryMenu/components/profileMenu/actions/ProfileMenuActions';
import { UserAddActionTypes } from '../pages/user/add/UserAddActionTypes';
import { UserUpdateActionTypes } from '../pages/user/update/UserUpdateActionTypes';
import { StatisticsActionTypes } from './statistics/StatisticsActionTypes';

export type AppActionTypes =  
    UserAddActionTypes | 
    UserUpdateActionTypes |
    ProfileMenuActionTypes |
    SecondaryMenuActionTypes |
    PrimaryMenuActionTypes |
    LanguageMenuActionTypes |
    StatisticsActionTypes;


