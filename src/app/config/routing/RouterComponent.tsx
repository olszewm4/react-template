import { PureComponent } from 'react';
import * as React from 'react';
import { Route, RouteProps, Switch } from 'react-router-dom';
import ErrorBoundaryContainer from 'src/app/infrastructure/errorsHandler/ErrorBoundaryContainer';
import RouteConfiguration from './RouteConfiguration';
import { RouterProps } from './typings';

class RouterComponent extends PureComponent<RouterProps, any> {

    public render() {
        return (
            <ErrorBoundaryContainer>
                <Switch location={this.props.location}>
                    {RouteConfiguration.Routes.map((value: RouteProps, index: number) =>
                        <Route  {...value} key={index} />
                    )}
                </Switch>
            </ErrorBoundaryContainer>
        )
    }
}


export default RouterComponent;