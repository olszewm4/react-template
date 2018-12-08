import { SecondaryMenuActionTypes } from '../components/menu/components/secondaryMenu/actions/SecondaryMenuActionTypes';
import { ProfileMenuActionTypes } from '../components/menu/components/secondaryMenu/components/profileMenu/actions/ProfileMenuActions';
import { UserAddActionTypes } from '../pages/user/add/UserAddActionTypes';
import { UserUpdateActionTypes } from '../pages/user/update/UserUpdateActionTypes';

export type AppActionTypes =  
    UserAddActionTypes | 
    UserUpdateActionTypes |
    ProfileMenuActionTypes |
    SecondaryMenuActionTypes;


