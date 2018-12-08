import { Component } from 'react';
import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';


export default class AboutPage extends Component<IProps, any> {
  public render() {
    return (
      <div style={{ background: 'red'}}>
        <span>About - {this.props.match.params.id} - {this.props.match.params.name !== undefined ? this.props.match.params.name : ''}</span>
      </div>
    )
  }
}

interface IProps extends RouteComponentProps<any> {
}
