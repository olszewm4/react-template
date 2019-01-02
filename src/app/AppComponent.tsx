import { Paper } from '@material-ui/core';
import * as React from 'react';
import { BrowserRouter, Route, RouteProps } from 'react-router-dom';
import MenuContainer from './components/menu/MenuContainer';
import ProgressContainer from './components/progress/ProgressContainer';
import './content/App.css';
import { withSnackbarProvider } from './high-order-components/SnackbarProvider/withSnackbarProvider';
import { withStoreProvider } from './high-order-components/StoreProvider/withStoreProvider';
import { withThemeProvider } from './high-order-components/ThemeProvider/withThemeProvider';
import AnimatedRouterComponent from './infrastructure/routing/animation/AnimatedRouterComponent';
import * as styles from './infrastructure/content/global.module.css';
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
        <div className={styles.dangerBackground}>
          <Paper style={{ borderRadius: 0, padding: "2em", minHeight: "230px" }}>
            <AnimatedRouterComponent location={props.location} />
          </Paper>
        </div>
      </React.Fragment>
    );
  };

}

export default compose(withStoreProvider, withThemeProvider, withSnackbarProvider)(AppComponent) as React.ComponentType<any>;
