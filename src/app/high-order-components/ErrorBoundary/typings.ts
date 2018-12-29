
// tslint:disable-next-line:interface-name
export interface ErrorBoundaryInjectedProps {
    onReset: () => any;
    error: Error;
    info: object;
}