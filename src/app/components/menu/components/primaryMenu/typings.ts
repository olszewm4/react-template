import { WithNamespaces } from 'react-i18next';
import { RouteComponentProps } from 'react-router-dom';

export enum PrimaryMenuVersions {
    Desktop,
    Mobile
}

export interface PrimaryMenuOwnProps {
    version: PrimaryMenuVersions
}

export interface PrimaryMenuStateProps {
    isPrimaryMenuOpen: boolean
}

export interface PrimaryMenuDispatchProps {
    openPrimaryMenu(): void;
    closePrimaryMenu(): void
}

interface StyledComponentProps {
    classes: any
}


export type PrimaryMenuProps = PrimaryMenuDispatchProps & PrimaryMenuStateProps & PrimaryMenuOwnProps & StyledComponentProps & RouteComponentProps<any> & WithNamespaces;