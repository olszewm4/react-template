import { Grid } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import * as React from 'react';
import { PureComponent } from 'react';
import PrimaryMenuContainer from './components/primaryMenu/PrimaryMenuContainer';
import { PrimaryMenuVersions } from './components/primaryMenu/typings';
import SecondaryMenuContainer from './components/secondaryMenu/SecondaryMenuContainer';
import { SecondaryMenuVersions } from './components/secondaryMenu/typings';
import * as globalSizeStyles from './../../infrastructure/content/global.size.module.css';



class MenuComponent extends PureComponent {
    public render() {
        return (
            <div className={globalSizeStyles["width-100"]}>
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

export const MenuContainer = MenuComponent;