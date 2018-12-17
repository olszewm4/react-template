import { WithNamespaces } from 'react-i18next';

// tslint:disable:interface-name

export interface LanguageMenuDispatchProps {
    closeLanguageMenu(): void
}

export interface LanguageMenuStateProps {
    anchorElement: any,
    isLanguageMenuOpen: boolean
}

export type LanguageMenuProps = LanguageMenuDispatchProps & LanguageMenuStateProps & WithNamespaces;