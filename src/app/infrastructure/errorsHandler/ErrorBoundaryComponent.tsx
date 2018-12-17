import { Component } from "react";
import * as React from 'react';
import { ErrorBoundaryComponentProps, ErrorBoundaryComponentState } from './typings';

export class ErrorBoundaryComponent extends Component<ErrorBoundaryComponentProps, ErrorBoundaryComponentState> {
  
    constructor(props: any, context?: any) {
        super(props, context);
        this.state = new ErrorBoundaryComponentState();
    }

    public componentDidCatch(error: any, info: any) {
      // Display fallback UI
      this.setState({ hasError: true });
      
      this.props.enqueueSnackbar(error.toString() + info.componentStack, { variant: 'error' });
      // You can also log the error to an error reporting service
      // tslint:disable:no-console
      console.log(error);
      console.log(info);
    }
  
    public render() {
      if (this.state.hasError) {
        return <h1>Something went wrong.</h1>;
      }
      return this.props.children;
    }
  }
