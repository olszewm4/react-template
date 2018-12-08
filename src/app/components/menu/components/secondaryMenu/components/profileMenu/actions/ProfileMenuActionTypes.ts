import { createAction } from "src/app/common/ActionCreateHelper";
import { ProfileMenuActionTypes } from './ProfileMenuActions';

export const OpenProfileMenuAction = (anchorElement: any) => createAction<ProfileMenuActionTypes, any>(ProfileMenuActionTypes.OpenProfileMenu, anchorElement);
export const CloseProfileMenuAction = () => createAction<ProfileMenuActionTypes>(ProfileMenuActionTypes.CloseProfileMenu);