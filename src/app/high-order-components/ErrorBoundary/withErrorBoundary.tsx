import * as React from 'react';
import { PureComponent } from 'react';
import { ErrorBoundaryInjectedProps } from './typings';
import { Types } from '../../common/utils/types';


const MISSING_ERROR = 'Error was swallowed during propagation.';


export const withErrorBoundary = <WrappedProps extends ErrorBoundaryInjectedProps>(WrappedComponent: React.ComponentType<WrappedProps | ErrorBoundaryInjectedProps>) => {

    // Only own WrappedComponent props
    type HocProps = Types.Subtract<WrappedProps, ErrorBoundaryInjectedProps>;

    // tslint:disable-next-line:interface-name
    interface HocState {
        readonly error: Error | null | undefined;
        readonly info: object | null | undefined;
    };

    return class WithErrorBoundary extends PureComponent<HocProps, HocState> {
        public static displayName = `withErrorBoundary(${WrappedComponent.name})`;

        public readonly state: HocState = {
            error: undefined,
            info: undefined
        };

        public componentDidUpdate = (prevProps: HocProps, prevState: HocState) => {
            // update errorBoundary in case eg. route change
            if(this.state.error && prevState.error === this.state.error && prevState.info === this.state.info){
                this.setState({ error: undefined, info: undefined });
            }
        }

        public componentDidCatch(error: Error | null, info: object) {
            this.setState({ error: error || new Error(MISSING_ERROR), info });
            this.logErrorToCloud(error, info);
        }

        public render() {
            const { children, ...restProps } = this.props as {
                children: React.ReactNode;
            };

            if (this.state.error) {
                return (
                    <WrappedComponent
                        {...restProps}
                        onReset={this.handleReset} // injected
                        error={this.state.error as Error}
                        info={this.state.info as object}
                    />
                );
            }

            return children;
        }

        private logErrorToCloud = (error: Error | null, info: object) => {
            // TODO: send error report to cloud
        };

        private handleReset = () => {
            this.setState({ error: undefined });
        };
    };
};