import { createAction } from "src/app/infrastructure/redux/ActionCreateHelper";
import { SecondaryMenuActionTypes } from './SecondaryMenuActionTypes';

export const OpenSecondaryMenuAction = (anchorElement: any) => createAction<SecondaryMenuActionTypes, any>(SecondaryMenuActionTypes.OpenSecondaryMenu, anchorElement);
export const CloseSecondaryMenuAction = () => createAction<SecondaryMenuActionTypes>(SecondaryMenuActionTypes.CloseSecondaryMenu);