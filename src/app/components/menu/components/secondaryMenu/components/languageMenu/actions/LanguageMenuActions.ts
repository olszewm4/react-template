import { LanguageMenuActionTypes } from './LanguageMenuActionTypes';
import { createAction } from '../../../../../../../infrastructure/redux/ActionCreateHelper';

export const OpenLanguageMenuAction = (anchorElement: any) => createAction<LanguageMenuActionTypes, any>(LanguageMenuActionTypes.OpenLanguageMenu, anchorElement);
export const CloseLanguageMenuAction = () => createAction<LanguageMenuActionTypes>(LanguageMenuActionTypes.CloseLanguageMenu);