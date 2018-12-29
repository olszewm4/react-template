import { IconButton } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import { SnackbarProvider } from 'notistack';
import * as React from 'react';


export const withSnackbarProvider = <WrappedProps extends {}>(WrappedComponent: React.ComponentType<WrappedProps>) => {

    return class WithSnackbarProvider extends React.Component<WrappedProps> {
        public static displayName = `withSnackbarProvider(${WrappedComponent.name})`;

        public render() {
            return (
                <SnackbarProvider
                    maxSnack={3}
                    action={[
                        <IconButton key="close"
                            aria-label="Close"
                            color="inherit" >
                            <Close fontSize={'small'} />
                        </IconButton>
                    ]}
                    anchorOrigin={{
                        horizontal: 'right',
                        vertical: 'bottom',
                    }}>
                    <WrappedComponent
                        {...this.props}
                    />
                </SnackbarProvider>
            );
        }
    };

};