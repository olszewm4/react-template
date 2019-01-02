import { withSnackbar } from 'notistack';
import { ErrorHandlerComponent } from './ErrorHandlerComponent';
import { withErrorBoundary } from '../../high-order-components/ErrorBoundary/withErrorBoundary';

export default withErrorBoundary(withSnackbar(ErrorHandlerComponent));