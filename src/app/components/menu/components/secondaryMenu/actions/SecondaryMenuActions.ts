import { SecondaryMenuActionTypes } from './SecondaryMenuActionTypes';
import { createAction } from '../../../../../infrastructure/redux/ActionCreateHelper';

export const OpenSecondaryMenuAction = (anchorElement: any) => createAction<SecondaryMenuActionTypes, any>(SecondaryMenuActionTypes.OpenSecondaryMenu, anchorElement);
export const CloseSecondaryMenuAction = () => createAction<SecondaryMenuActionTypes>(SecondaryMenuActionTypes.CloseSecondaryMenu);