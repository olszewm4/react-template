import { WithNamespaces } from 'react-i18next';
import { StyledComponentProps } from '@material-ui/core/styles/withStyles';

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

export type SecondaryMenuProps = SecondaryMenuDispatchProps & SecondaryMenuStateProps & SecondaryMenuOwnProps & StyledComponentProps & WithNamespaces;