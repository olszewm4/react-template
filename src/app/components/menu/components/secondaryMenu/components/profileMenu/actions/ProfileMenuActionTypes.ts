import { ProfileMenuActionTypes } from './ProfileMenuActions';
import { createAction } from '../../../../../../../infrastructure/redux/ActionCreateHelper';

export const OpenProfileMenuAction = (anchorElement: any) => createAction<ProfileMenuActionTypes, any>(ProfileMenuActionTypes.OpenProfileMenu, anchorElement);
export const CloseProfileMenuAction = () => createAction<ProfileMenuActionTypes>(ProfileMenuActionTypes.CloseProfileMenu);