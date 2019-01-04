import { WithNamespaces } from 'react-i18next';

export enum SecondaryMenuVersions {
    Desktop,
    Mobile
}

export interface SecondaryMenuOwnProps {
    version: SecondaryMenuVersions
}

export interface SecondaryMenuStateProps {
    anchorElement: any,
    isSecondaryMenuOpen: boolean,
}

export interface SecondaryMenuDispatchProps {
    openSecondaryMenu(anchorElement: any): void;
    closeSecondaryMenu(): void
    openProfileMenu(anchorElement: any): void;
    openLanguageMenu(anchorElement: any): void;
}

interface StyledComponentProps {
    classes: any
}


export type SecondaryMenuProps = SecondaryMenuDispatchProps & SecondaryMenuStateProps & SecondaryMenuOwnProps & StyledComponentProps & WithNamespaces;