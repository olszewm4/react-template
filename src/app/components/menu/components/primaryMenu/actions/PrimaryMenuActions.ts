import { PrimaryMenuActionTypes } from './PrimaryMenuActionTypes';
import { createAction } from '../../../../../infrastructure/redux/ActionCreateHelper';


export const OpenPrimaryMenuAction = () => createAction<PrimaryMenuActionTypes>(PrimaryMenuActionTypes.OpenPrimaryMenu);
export const ClosePrimaryMenuAction = () => createAction<PrimaryMenuActionTypes>(PrimaryMenuActionTypes.ClosePrimaryMenu);