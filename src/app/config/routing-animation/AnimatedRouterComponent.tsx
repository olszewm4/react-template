import * as H from 'history';
import { PureComponent } from 'react';
import * as React from 'react';
import posed, { PoseGroup } from 'react-pose';
import RouterContainer from '../routing/RouterContainer';
import { AnimatedRouterProps } from './typings';

// tslint:disable:object-literal-sort-keys

class AnimatedRouterComponent extends PureComponent<AnimatedRouterProps, any> {

    private PoseRouteContainer = posed.div({
        enter: {
            y: 0,
            opacity: 1,
            delay: 300,
            transition: {
                y: { type: 'spring', stiffness: 1000, damping: 15 },
                default: { duration: 300 }
            }
        },
        exit: {
            y: 50,
            opacity: 0,
            transition: { duration: 150 }
        }
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