import * as React from 'react';
import { BrowserRouter, Route, RouteProps } from 'react-router-dom';
import HeaderComponent from './components/header/HeaderComponent';
import AnimatedRouterComponent from './config/routing-animation/AnimatedRouterComponent';
import './content/App.css';

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