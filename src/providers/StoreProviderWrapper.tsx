import { PureComponent } from 'react';
import * as React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { combinedReducers } from 'src/index.store';

export class StoreProviderWrapper extends PureComponent {

    private store = createStore(combinedReducers);


    public render() {
        return (
            <Provider store={this.store}>
                {this.props.children}
            </Provider>
        );
    }
}