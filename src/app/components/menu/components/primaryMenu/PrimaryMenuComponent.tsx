import { Divider, Drawer, Grid, Hidden, IconButton, List, ListItem } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import * as classNames from 'classnames';
import { PureComponent } from 'react';
import * as React from 'react';
import './../../../../common/commonStyles.css';
import LogoContainer from './components/LogoContainer';
import './PrimaryMenu.css';
import { PrimaryMenuProps, PrimaryMenuVersions } from './typings';

// tslint:disable-next-line:interface-name
interface MenuItem {
    name: string,
    path: string
}

export class PrimaryMenuComponent extends PureComponent<PrimaryMenuProps, any> {

    private menuItems: MenuItem[] = [
        { name: 'Home', path: "/Home" },
        { name: 'About', path: "/About/0" },
        { name: 'Tasks', path: "/Home" },
    ];

    public render() {
        const { version } = this.props;
        if (version === PrimaryMenuVersions.Desktop) {
            return this.renderDesktop();
        }
        else {
            return this.renderMobile();
        }
    }


    private renderDesktop() {
        const { classes } = this.props;

        return (
            <React.Fragment>
                <Grid item={true} xs={true}>
                    <Hidden smDown={true}>
                        <Grid container={true} alignItems="center">
                            <LogoContainer />
                        </Grid>
                    </Hidden>
                    <Hidden mdUp={true}>
                        <IconButton className={classes.menuButton} onClick={this.onMenuToggle} color="inherit" aria-label="Open drawer">
                            <MenuIcon />
                        </IconButton>
                    </Hidden>
                </Grid>
                <Grid container={true} item={true} xs={6} className={classNames(classes.sectionDesktop, "inherit-min-height")} alignItems={"center"} justify={"center"}>
                    <List className={classNames("sectionMainDesktopMenu", "inherit-min-height")} disablePadding={true}>
                        {this.renderMenu()}
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
                    onClose={this.onMenuToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}>
                    <List>
                        <ListItem style={{ justifyContent: 'left', paddingLeft: 0 }} >
                            <LogoContainer />
                        </ListItem>
                        <Divider />
                        {this.renderMenu()}
                    </List>
                </Drawer>
            </Hidden>
        );
    }

    private renderMenu() {
        return (
            <React.Fragment>
                {this.menuItems.map((value: MenuItem, index: number) => (
                    <ListItem button={true} key={index} onClick={this.onMenuItemClick.bind(this, value)} style={{ textAlign: "unset", width: "unset" }} >
                        <strong>
                            {this.props.t(value.name, { ns: "PrimaryMenuComponent", defaultValue: value.name })}
                        </strong>
                    </ListItem>
                ))}
            </React.Fragment>
        )
    }

    private onMenuToggle = (): void => {
        if (this.props.isPrimaryMenuOpen) {
            this.props.closePrimaryMenu();
        }
        else {
            this.props.openPrimaryMenu();
        }
    }

    private onMenuItemClick = (item: MenuItem): void => {
        this.props.closePrimaryMenu();
        this.props.history.push(item.path);
    }
}
