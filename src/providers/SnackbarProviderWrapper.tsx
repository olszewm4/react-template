import { IconButton } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import { SnackbarProvider } from 'notistack';
import { PureComponent } from 'react';
import * as React from 'react';

export class SnackbarProviderWrapper extends PureComponent {
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
                {this.props.children}
            </SnackbarProvider>
        );
    }
}