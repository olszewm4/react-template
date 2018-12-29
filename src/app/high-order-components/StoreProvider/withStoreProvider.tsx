import * as React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { InterceptorsService } from 'src/app/infrastructure/axios/interceptors/InterceptorsService';
import { ApplicationReducer } from 'src/app/infrastructure/redux/ApplicationReducer';

export let Store = createStore(ApplicationReducer);

InterceptorsService.setup(Store);

export const withStoreProvider = <WrappedProps extends {}>(WrappedComponent: React.ComponentType<WrappedProps>) => {

    return class WithStoreProvider extends React.Component<WrappedProps> {
        public static displayName = `withStoreProvider(${WrappedComponent.name})`;

        public render() {
            return (
                <Provider store={Store}>
                    <WrappedComponent
                        {...this.props}
                    />
                </Provider>
            );
        }
    };

};