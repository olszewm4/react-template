import { Grid, withStyles } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import * as React from 'react';
import { PureComponent } from 'react';
import PrimaryMenuContainer from './components/primaryMenu/PrimaryMenuContainer';
import { PrimaryMenuVersions } from './components/primaryMenu/typings';
import SecondaryMenuContainer from './components/secondaryMenu/SecondaryMenuContainer';
import { SecondaryMenuVersions } from './components/secondaryMenu/typings';
import { MenuComponentProps } from './typings';
import * as globalSizeStyles from './../../infrastructure/content/global.size.module.css';
import { MenuStyles } from './content/styles';



class MenuComponent extends PureComponent<MenuComponentProps, any> {

    public render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <AppBar position="fixed">
                    <Toolbar>
                        <Grid container={true} className={globalSizeStyles.inheritMinHeight} justify="center" alignItems="center">
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

export const MenuContainer = withStyles(MenuStyles)(MenuComponent);