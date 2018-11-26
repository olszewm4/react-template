import * as React from 'react';
import { BrowserRouter, Route, RouteProps } from 'react-router-dom';
import AnimatedRouterComponent from 'src/config/routing-animation/AnimatedRouterComponent';
import HeaderComponent from '../components/header/HeaderComponent';
import './App.css';

class App extends React.Component<any, any> {

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
        <HeaderComponent />
        <AnimatedRouterComponent location={props.location} />
      </React.Fragment>
    );
  };

}

export default App;