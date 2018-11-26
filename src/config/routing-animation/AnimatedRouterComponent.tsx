import * as H from 'history';
import { Component } from 'react';
import * as React from 'react';
import posed, { PoseGroup } from 'react-pose';
import RouterComponent from '../routing/RouterComponent';


export default class AnimatedRouterComponent extends Component<AnimatedRouterComponentProps, any> {

    public RouteContainer = posed.div({
        enter: { opacity: 1, delay: 300, beforeChildren: true },
        exit: { opacity: 0 }
      });

    public render() {
        return (
            <PoseGroup>
                <this.RouteContainer key={(this.props.location as  H.Location).key}>
                    <RouterComponent location={this.props.location} />
                </this.RouteContainer>
            </PoseGroup>
        )
    }
}

// tslint:disable-next-line:interface-name
interface AnimatedRouterComponentProps {
    location?: H.Location
}