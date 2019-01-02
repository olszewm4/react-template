import * as H from 'history';
import { withSnackbar } from 'notistack';
import { Component } from 'react';
import * as React from 'react';
import { withRouter } from 'react-router-dom';
import RouterComponent from './RouterComponent';
import { RouterProps } from './typings';

class RouterContainer extends Component<RouterProps, any> {

    private unlisten: H.UnregisterCallback = () => {};

    public render() {
        return (
            <RouterComponent {...this.props} />
        )
    }

    public componentDidMount() {
        this.unlisten = this.props.history.listen((location: H.Location<any>, action) => {
            this.onRouteChanged(this.props.location as H.Location<any>, location);
        });
    }

    public componentWillUnmount() {
        this.unlisten();
    }

    private onRouteChanged(prevLocation: H.Location<any>, nextLocation: H.Location<any>) {
        if (prevLocation.pathname !== nextLocation.pathname) {
            this.props.enqueueSnackbar(`Router change: ${prevLocation.pathname} -> ${nextLocation.pathname}`, { variant: 'info' });
        }
    }
}


export default withSnackbar(withRouter(RouterContainer));