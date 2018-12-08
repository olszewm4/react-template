import * as H from 'history';
import { PureComponent } from 'react';
import * as React from 'react';
import posed, { PoseGroup } from 'react-pose';
import RouterContainer from '../routing/RouterContainer';
import { AnimatedRouterProps } from './typings';


class AnimatedRouterComponent extends PureComponent<AnimatedRouterProps, any> {

    private PoseRouteContainer = posed.div({
        enter: { opacity: 1, delay: 300, beforeChildren: true },
        exit: { opacity: 0 }
    });

    public render() {
        return (
            <PoseGroup>
                <this.PoseRouteContainer key={this.getLocationKey()}>
                    <RouterContainer />
                </this.PoseRouteContainer>
            </PoseGroup>
        )
    }

    private getLocationKey(): string {
        return (this.props.location as H.Location).key || (this.props.location as H.Location).pathname;
    }
}

export default AnimatedRouterComponent;