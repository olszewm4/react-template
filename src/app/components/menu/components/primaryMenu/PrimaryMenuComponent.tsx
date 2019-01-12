import { Divider, Drawer, Grid, Hidden, IconButton, List, ListItem, withStyles } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import classNames from 'classnames';
import { PureComponent } from 'react';
import * as React from 'react';
import LogoContainer from './components/logo/LogoContainer';
import * as localStyles from './content/primary.menu.module.css';
import * as globalSizeStyles from './../../../../infrastructure/content/global.size.module.css';
import { PrimaryMenuProps, PrimaryMenuVersions } from './typings';
import { PrimaryMenuItem } from './components/primaryMenuItem/typings';
import PrimaryMenuItemContainer from './components/primaryMenuItem/PrimaryMenuItemContainer';
import { PrimaryMenuStyles } from './content/styles';

class PrimaryMenuComponent extends PureComponent<PrimaryMenuProps, any> {

    private menuItems: PrimaryMenuItem[] = [
        { name: 'Home', path: "/Home" },
        { name: 'About', path: "/About/0" },
        { name: 'Tasks', path: "/Home" },
    ];

    public render() {
        if (this.props.version === PrimaryMenuVersions.Desktop) {
            return this.renderDesktop();
        }
        else {
            return this.renderMobile();
        }
    }

    private renderDesktop() {
        const { classes } = this.props as {
            classes: Record<string, string>
        };

        return (
            <React.Fragment>
                <Grid item={true} xs={true}>
                    <Hidden smDown={true}>
                        <Grid container={true} alignItems="center">
                            <LogoContainer />
                        </Grid>
                    </Hidden>
                    <Hidden mdUp={true}>
                        <IconButton className={classes.menuButton} onClick={this.handleMenuToggle} color="inherit" aria-label="Open drawer">
                            <MenuIcon />
                        </IconButton>
                    </Hidden>
                </Grid>
                <Grid container={true} item={true} xs={6} className={classNames(classes.sectionDesktop, globalSizeStyles.inheritMinHeight)} alignItems={"center"} justify={"center"}>
                    <List className={localStyles.sectionMainDesktopMenu} disablePadding={true}>
                        {this.renderMenuItems()}
                    </List>
                </Grid>
            </React.Fragment>
        );
    }

    private renderMobile() {
        const { isPrimaryMenuOpen } = this.props;

        return (
            <Hidden mdUp={true} implementation="css">
                <Drawer
                    variant="temporary"
                    anchor={'left'}
                    open={isPrimaryMenuOpen}
                    onClose={this.handleMenuToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}>
                    <List>
                        <ListItem style={{ justifyContent: 'left', paddingLeft: 0 }} >
                            <LogoContainer />
                        </ListItem>
                        <Divider />
                        {this.renderMenuItems()}
                    </List>
                </Drawer>
            </Hidden>
        );
    }

    private renderMenuItems() {
        return (
            <React.Fragment>
                {this.menuItems.map((value: PrimaryMenuItem, index: number) => <PrimaryMenuItemContainer key={index} item={value} /> )}
            </React.Fragment>
        )
    }

    private handleMenuToggle = (): void => {
        if (this.props.isPrimaryMenuOpen) {
            this.props.closePrimaryMenu();
        }
        else {
            this.props.openPrimaryMenu();
        }
    }
}

export default withStyles(PrimaryMenuStyles)(PrimaryMenuComponent);
