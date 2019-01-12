import { RouteComponentProps } from 'react-router-dom';
import { WithNamespaces } from 'react-i18next';

export interface PrimaryMenuItem {
    name: string,
    path: string
}

export interface PrimaryMenuItemOwnProps {
    item: PrimaryMenuItem
}

export interface PrimaryMenuItemDispatchProps {
    closePrimaryMenu(): void
}


export type PrimaryMenuItemProps = PrimaryMenuItemDispatchProps & PrimaryMenuItemOwnProps & RouteComponentProps<any> & WithNamespaces;