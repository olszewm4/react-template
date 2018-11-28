import * as H from 'history';
import { Component } from 'react';
import * as React from 'react';
import { Route, RouteProps, Switch } from 'react-router-dom';
import RouteConfiguration from './RouteConfiguration';

export default class RouterComponent extends Component<RouterComponentProps, any> {

    public render() {
        return (
            <Switch location={this.props.location}>
                {RouteConfiguration.Routes.map((value: RouteProps, index: number) =>
                    <Route  {...value} key={index} />
                )}
            </Switch>
        )
    }
}

// tslint:disable-next-line:interface-name
interface RouterComponentProps {
    location?: H.Location
}