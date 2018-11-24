import { Component } from 'react';
import * as React from 'react';
import { Route, RouteProps, Switch } from 'react-router-dom';
import RouteConfiguration from './RouteConfiguration';


export default class RouterComponent extends Component<any, any> {

    public render() {
        return (
            <Switch>
                {RouteConfiguration.Routes.map((value: RouteProps, index: number) =>
                    <Route  {...value} key={index} />
                )}
            </Switch>
        )
    }
}