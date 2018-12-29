import { createMuiTheme, MuiThemeProvider, Theme } from '@material-ui/core/styles';
import * as React from 'react';

export const withThemeProvider = <WrappedProps extends {}>(WrappedComponent: React.ComponentType<WrappedProps>) => {

    return class WithThemeProvider extends React.Component<WrappedProps> {
        public static displayName = `withThemeProvider(${WrappedComponent.name})`;

        private theme: Theme = createMuiTheme({
            palette: {
                primary: { main: '#2196f3' }, // Purple and green play nicely together.
                secondary: { main: '#ff1744' }, // This is just green.A700 as hex.
            }
        });
        
        public render() {
            return (
                <MuiThemeProvider theme={this.theme}>
                    <WrappedComponent
                        {...this.props}
                    />
                </MuiThemeProvider>
            );
        }
    };

};