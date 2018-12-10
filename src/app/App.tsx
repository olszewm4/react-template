import * as React from 'react';
import { BrowserRouter, Route, RouteProps } from 'react-router-dom';
import HeaderComponent from './components/header/HeaderComponent';
import MenuContainer from './components/menu/MenuContainer';
import AnimatedRouterComponent from './config/routing-animation/AnimatedRouterComponent';
import './content/App.css';

type AppProps = RouteProps;

class App extends React.Component<AppProps, any> {

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
        <HeaderComponent />
        <div className="main-container">
          <AnimatedRouterComponent location={props.location} />
        </div>
      </React.Fragment>
    );
  };

}

export default App;