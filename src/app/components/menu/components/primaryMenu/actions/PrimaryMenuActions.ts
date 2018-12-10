import { createAction } from "src/app/common/ActionCreateHelper";
import { PrimaryMenuActionTypes } from './PrimaryMenuActionTypes';


export const OpenPrimaryMenuAction = () => createAction<PrimaryMenuActionTypes>(PrimaryMenuActionTypes.OpenPrimaryMenu);
export const ClosePrimaryMenuAction = () => createAction<PrimaryMenuActionTypes>(PrimaryMenuActionTypes.ClosePrimaryMenu);