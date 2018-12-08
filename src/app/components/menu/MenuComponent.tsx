import { Divider, Drawer, Grid, Hidden, List, ListItem } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import { withStyles, } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import * as classNames from 'classnames';
import * as React from 'react';
import { PureComponent } from 'react';
import PrimaryMenuContainer from './components/primaryMenu/PrimaryMenuContainer';
import ProfileMenuContainer from './components/secondaryMenu/components/profileMenu/ProfileMenuContainer';
import SecondaryMenuContainer from './components/secondaryMenu/SecondaryMenuContainer';
import { SecondaryMenuVersions } from './components/secondaryMenu/typings';
import './Menu.css';
import { MenuStyles } from './styles';
import { MenuComponentProps, MenuComponentState } from './types';



class MenuComponent extends PureComponent<MenuComponentProps, MenuComponentState> {

    /**
     *
     */
    constructor(props: MenuComponentProps, context?: any) {
        super(props, context);
        this.state = {
            mobileOpen: false
        }

    }

    public render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <Hidden mdUp={true} implementation="css">
                    <Drawer
                        container={this.props.container}
                        variant="temporary"
                        anchor={'left'}
                        open={this.state.mobileOpen}
                        onClose={this.handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}>
                        <List>
                            <ListItem style={{ justifyContent: 'left', paddingLeft: 0 }} >
                                <img src="/static/media/logo.ee7cd8ed.svg" className="App-logo" alt="logo" />
                                <strong>Welcome to React</strong>
                            </ListItem>
                            <Divider />
                            <PrimaryMenuContainer />
                        </List>
                    </Drawer>
                </Hidden>
                <AppBar position="static">
                    <Toolbar>
                        <Grid container={true} className="inherit-min-height" justify="center" alignItems="center">
                            <Grid item={true} xs={true}>
                                <Hidden smDown={true}>
                                    <Grid container={true} alignItems="center">
                                        <img src="/static/media/logo.ee7cd8ed.svg" className="App-logo" alt="logo" />
                                        <strong>Welcome to React</strong>
                                    </Grid>
                                </Hidden>
                                <Hidden mdUp={true}>
                                    <IconButton className={classes.menuButton} onClick={this.handleDrawerToggle} color="inherit" aria-label="Open drawer">
                                        <MenuIcon />
                                    </IconButton>
                                </Hidden>
                            </Grid>
                            <Grid container={true} item={true} xs={true} className={classNames(classes.sectionDesktop, "inherit-min-height")} alignItems={"center"} justify={"center"}>
                                <List className={classNames("sectionMainDesktopMenu", "inherit-min-height")} disablePadding={true}>
                                    <PrimaryMenuContainer />
                                </List>
                            </Grid>
                            <Grid container={true} item={true} xs={true} className={classes.flex} alignItems={"center"} justify={"flex-end"} >
                                <SecondaryMenuContainer version={SecondaryMenuVersions.Desktop} />
                            </Grid>
                        </Grid>

                    </Toolbar>
                </AppBar>
                <ProfileMenuContainer />
                <SecondaryMenuContainer version={SecondaryMenuVersions.Mobile} />
            </div>
        );
    }

    private handleDrawerToggle = () => {
        this.setState({ mobileOpen: !this.state.mobileOpen });
    }
}

export default withStyles(MenuStyles)(MenuComponent);