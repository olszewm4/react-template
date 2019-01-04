export interface ErrorBoundaryInjectedProps {
    onReset: () => any;
    error: Error;
    info: object;
}