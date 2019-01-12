import { StyledComponentProps } from '@material-ui/core/styles/withStyles';

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


export type PrimaryMenuProps = PrimaryMenuDispatchProps & PrimaryMenuStateProps & PrimaryMenuOwnProps & StyledComponentProps;