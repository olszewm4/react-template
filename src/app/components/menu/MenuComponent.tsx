import { Grid } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import { withStyles, } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import * as React from 'react';
import { PureComponent } from 'react';
import PrimaryMenuContainer from './components/primaryMenu/PrimaryMenuContainer';
import { PrimaryMenuVersions } from './components/primaryMenu/typings';
import SecondaryMenuContainer from './components/secondaryMenu/SecondaryMenuContainer';
import { SecondaryMenuVersions } from './components/secondaryMenu/typings';
import './Menu.css';
import { MenuStyles } from './styles';
import { MenuComponentProps } from './types';



class MenuComponent extends PureComponent<MenuComponentProps, any> {

    public render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <Grid container={true} className="inherit-min-height" justify="center" alignItems="center">
                            <PrimaryMenuContainer version={PrimaryMenuVersions.Desktop} />
                            <SecondaryMenuContainer version={SecondaryMenuVersions.Desktop} />
                        </Grid>
                    </Toolbar>
                </AppBar>
                <PrimaryMenuContainer version={PrimaryMenuVersions.Mobile} />
                <SecondaryMenuContainer version={SecondaryMenuVersions.Mobile} />
            </div>
        );
    }
}

export default withStyles(MenuStyles)(MenuComponent);