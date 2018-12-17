import { InjectedNotistackProps } from 'notistack';

export type ErrorBoundaryComponentProps = InjectedNotistackProps;

export class ErrorBoundaryComponentState {
    public hasError: boolean = false;
}