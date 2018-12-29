import { withSnackbar } from 'notistack';
import { withErrorBoundary } from 'src/app/high-order-components/ErrorBoundary/withErrorBoundary';
import { ErrorHandlerComponent } from './ErrorHandlerComponent';

export default withErrorBoundary(withSnackbar(ErrorHandlerComponent));