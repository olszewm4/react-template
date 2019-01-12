import * as React from 'react';
import { Provider } from 'react-redux';
import AppRoot from '../../infrastructure/compositionRoot/AppRoot';
import { ReactNode } from 'react';

export const withStoreProvider = <WrappedProps extends {}>(WrappedComponent: React.ComponentType<WrappedProps>) => {

    return class WithStoreProvider extends React.Component<WrappedProps> {
        public static displayName = `withStoreProvider(${WrappedComponent.name})`;

        public render = () : ReactNode => {
            return (
                <Provider store={AppRoot.getRoot().Store}>
                    <WrappedComponent
                        {...this.props}
                    />
                </Provider>
            );
        }
    };

};