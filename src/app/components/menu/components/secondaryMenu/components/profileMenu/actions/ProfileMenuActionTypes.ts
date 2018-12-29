import { createAction } from "src/app/infrastructure/redux/ActionCreateHelper";
import { ProfileMenuActionTypes } from './ProfileMenuActions';

export const OpenProfileMenuAction = (anchorElement: any) => createAction<ProfileMenuActionTypes, any>(ProfileMenuActionTypes.OpenProfileMenu, anchorElement);
export const CloseProfileMenuAction = () => createAction<ProfileMenuActionTypes>(ProfileMenuActionTypes.CloseProfileMenu);