import { Divider, Drawer, Grid, Hidden, IconButton, List, ListItem } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import * as classNames from 'classnames';
import { PureComponent } from 'react';
import * as React from 'react';
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
        if(version === PrimaryMenuVersions.Desktop){
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
                            <img src="/static/media/logo.ee7cd8ed.svg" className="App-logo" alt="logo" />
                            <strong>Welcome to React</strong>
                        </Grid>
                    </Hidden>
                    <Hidden mdUp={true}>
                        <IconButton className={classes.menuButton} onClick={this.onMenuToggle} color="inherit" aria-label="Open drawer">
                            <MenuIcon />
                        </IconButton>
                    </Hidden>
                </Grid>
                <Grid container={true} item={true} xs={true} className={classNames(classes.sectionDesktop, "inherit-min-height")} alignItems={"center"} justify={"center"}>
                    <List className={classNames("sectionMainDesktopMenu", "inherit-min-height")} disablePadding={true}>
                        {this.menuItems.map((value: MenuItem, index: number) => (
                            <ListItem button={true} key={index} onClick={this.onMenuItemClick.bind(this, value)}>
                                <strong>
                                    {value.name}
                                </strong>
                            </ListItem>
                        ))}
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
                            <img src="/static/media/logo.ee7cd8ed.svg" className="App-logo" alt="logo" />
                            <strong>Welcome to React</strong>
                        </ListItem>
                        <Divider />
                        {this.menuItems.map((value: MenuItem, index: number) => (
                            <ListItem button={true} key={index} onClick={this.onMenuItemClick.bind(this, value)}>
                                <strong>
                                    {value.name}
                                </strong>
                            </ListItem>
                        ))}
                    </List>
                </Drawer>
            </Hidden>
        );
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
