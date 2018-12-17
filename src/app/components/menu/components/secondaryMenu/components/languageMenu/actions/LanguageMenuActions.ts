import { createAction } from "src/app/common/ActionCreateHelper";
import { LanguageMenuActionTypes } from './LanguageMenuActionTypes';

export const OpenLanguageMenuAction = (anchorElement: any) => createAction<LanguageMenuActionTypes, any>(LanguageMenuActionTypes.OpenLanguageMenu, anchorElement);
export const CloseLanguageMenuAction = () => createAction<LanguageMenuActionTypes>(LanguageMenuActionTypes.CloseLanguageMenu);