import { PureComponent } from "react";
import * as React from 'react';
import { ErrorHandlerComponentProps } from './typings';

export class ErrorHandlerComponent extends PureComponent<ErrorHandlerComponentProps, any> {

    public render() {
        this.props.enqueueSnackbar(this.props.error.toString() + (this.props.info as any).componentStack, { variant: 'error' });

        return (<React.Fragment>
            <h1>Something went wrong.</h1>
            <button onClick={this.handleReset}>Reset</button>
        </React.Fragment>);
    }
    
    private handleReset = (event: React.MouseEvent<HTMLButtonElement>) => {
        this.props.onReset();
    };
}