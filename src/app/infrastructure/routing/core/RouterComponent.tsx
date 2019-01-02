import { PureComponent } from 'react';
import * as React from 'react';
import { Route, RouteProps, Switch } from 'react-router-dom';
import RouteConfiguration from './RouteConfiguration';
import { RouterProps } from './typings';
import ErrorHandlerContainer from '../../../components/error/ErrorHandlerContainer';

class RouterComponent extends PureComponent<RouterProps, any> {

    public render() {
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
}


export default RouterComponent;