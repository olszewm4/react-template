import { InjectedNotistackProps } from 'notistack';
import { ErrorBoundaryInjectedProps } from '../../high-order-components/ErrorBoundary/typings';

export type ErrorHandlerComponentProps = ErrorBoundaryInjectedProps & InjectedNotistackProps;