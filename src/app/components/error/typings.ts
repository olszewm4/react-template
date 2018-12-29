import { InjectedNotistackProps } from 'notistack';
import { ErrorBoundaryInjectedProps } from 'src/app/high-order-components/ErrorBoundary/typings';

export type ErrorHandlerComponentProps = ErrorBoundaryInjectedProps & InjectedNotistackProps;