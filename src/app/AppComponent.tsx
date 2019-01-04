import { Paper } from '@material-ui/core';
import * as React from 'react';
import { BrowserRouter, Route, RouteProps } from 'react-router-dom';
import MenuContainer from './components/menu/MenuContainer';
import ProgressContainer from './components/progress/ProgressContainer';
import * as localStyles from './content/app.module.css';
import { withSnackbarProvider } from './high-order-components/SnackbarProvider/withSnackbarProvider';
import { withStoreProvider } from './high-order-components/StoreProvider/withStoreProvider';
import { withThemeProvider } from './high-order-components/ThemeProvider/withThemeProvider';
import AnimatedRouterComponent from './infrastructure/routing/animation/AnimatedRouterComponent';
import { compose } from 'redux';

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
        <div className={localStyles["main-container"]}>
          <Paper className={localStyles.pageContainer}>
            <AnimatedRouterComponent location={props.location} />
          </Paper>
        </div>
      </React.Fragment>
    );
  };

}

export default compose(withStoreProvider, withThemeProvider, withSnackbarProvider)(AppComponent) as React.ComponentType<any>;
