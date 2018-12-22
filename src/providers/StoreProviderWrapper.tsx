import { PureComponent } from 'react';
import * as React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { InterceptorsService } from 'src/app/infrastructure/interceptors/interceptorsService';
import { combinedReducers } from 'src/index.store';

export let Store = createStore(combinedReducers);

InterceptorsService.setup(Store);

export class StoreProviderWrapper extends PureComponent {
    public render() {
        return (
            <Provider store={Store}>
                {this.props.children}
            </Provider>
        );
    }
}