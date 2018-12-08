import { createMuiTheme, MuiThemeProvider, Theme } from '@material-ui/core/styles';
import { PureComponent } from 'react';
import * as React from 'react';

export class ThemeProviderWrapper extends PureComponent {

    private theme: Theme = createMuiTheme({
        palette: {
          primary: { main: '#2196f3' }, // Purple and green play nicely together.
          secondary: { main: '#ff1744' }, // This is just green.A700 as hex.
        },
      });

    public render() {
        return (
            <MuiThemeProvider  theme={this.theme}>
                {this.props.children}
            </MuiThemeProvider>
        );
    }
}