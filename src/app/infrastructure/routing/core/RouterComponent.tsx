import * as H from 'history';
import { PureComponent, ReactNode } from 'react';
import * as React from 'react';
import { Route, RouteProps, Switch } from 'react-router-dom';
import RouteConfiguration from './RouteConfiguration';
import { RouterProps } from './typings';
import ErrorHandlerContainer from '../../../components/error/ErrorHandlerContainer';
import { withSnackbar } from 'notistack';

class RouterComponent extends PureComponent<RouterProps> {

    private unlisten: H.UnregisterCallback = () => {};

    public render = () : ReactNode => {
        return (
            <ErrorHandlerContainer>
                <Switch location={this.props.location}>
                    {RouteConfiguration.Routes.map((value: RouteProps, index: number) =>
                        <Route  {...value} key={index} />
                    )}
                </Switch>
            </ErrorHandlerContainer>
        )
    }

    public componentDidMount = () : void => {
        this.unlisten = this.props.history.listen((location: H.Location<any>, action) => {
            this.onRouteChanged(this.props.location as H.Location<any>, location);
        });
    }

    public componentWillUnmount = () : void => {
        this.unlisten();
    }

    private onRouteChanged(prevLocation: H.Location<any>, nextLocation: H.Location<any>) {
        if (prevLocation.pathname !== nextLocation.pathname) {
            this.props.enqueueSnackbar(`Router change: ${prevLocation.pathname} -> ${nextLocation.pathname}`, { variant: 'info' });
        }
    }
}


export default withSnackbar(RouterComponent);