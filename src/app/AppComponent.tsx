import { Paper } from '@material-ui/core';
import * as React from 'react';
import { BrowserRouter, Route, RouteProps } from 'react-router-dom';
import MenuContainer from './components/menu/MenuContainer';
import ProgressContainer from './components/progress/ProgressContainer';
import AnimatedRouterComponent from './config/routing-animation/AnimatedRouterComponent';
import './content/App.css';


export class AppComponent extends React.Component {

  // tslint::jsx-no-lambda
  public render() {
    return (
      <BrowserRouter>
        <Route render={this.renderBody} />
      </BrowserRouter>
    );
  }

  private renderBody = (props: RouteProps) => {
    return (
      <React.Fragment>
        <MenuContainer />
        <ProgressContainer />
        <div className="main-container">
          <Paper style={{ borderRadius: 0, padding: "2em", minHeight: "230px" }}>
            <AnimatedRouterComponent location={props.location} />
          </Paper>
        </div>
      </React.Fragment>
    );
  };

}