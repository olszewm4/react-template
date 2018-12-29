import { Paper } from '@material-ui/core';
import * as React from 'react';
import { BrowserRouter, Route, RouteProps } from 'react-router-dom';
import { compose } from 'redux';
import MenuContainer from './components/menu/MenuContainer';
import ProgressContainer from './components/progress/ProgressContainer';
import AnimatedRouterComponent from './config/routing-animation/AnimatedRouterComponent';
import './content/App.css';
import { withSnackbarProvider } from './high-order-components/SnackbarProvider/withSnackbarProvider';
import { withStoreProvider } from './high-order-components/StoreProvider/withStoreProvider';
import { withThemeProvider } from './high-order-components/ThemeProvider/withThemeProvider';


class AppComponent extends React.Component {

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

export default compose(withStoreProvider, withThemeProvider, withSnackbarProvider)(AppComponent);
// export default withStoreProvider(withThemeProvider(withSnackbarProvider(AppComponent)));