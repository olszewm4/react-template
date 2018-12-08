import { Divider, Drawer, Grid, Hidden, List, ListItem } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Theme, withStyles, } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import MoreIcon from '@material-ui/icons/MoreVert';
import NotificationsIcon from '@material-ui/icons/Notifications';
import * as classNames from 'classnames';
import * as React from 'react';
import { PureComponent } from 'react';
import './Menu.css';

// tslint:disable:object-literal-sort-keys
const styles = (theme: Theme) => ({
    grow: {
        flexGrow: 1,
    },
    button: {
    },
    root: {
        width: '100%',
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
        padding: theme.spacing.unit
    },
    inputRoot: {
        color: 'inherit',
        width: '100%',
    },
    inputInput: {
        paddingTop: theme.spacing.unit,
        paddingRight: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
        paddingLeft: theme.spacing.unit * 10,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: 200,
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    flex: {
        display: 'flex'
    }
});

class MenuComponent extends PureComponent<MenuComponentProps, MenuComponentState> {

    /**
     *
     */
    constructor(props: MenuComponentProps, context?: any) {
        super(props, context);
        this.state = {
            anchorEl: null,
            mobileMoreAnchorEl: null,
            mobileOpen: false
        }

    }

    public render() {
        const { anchorEl, mobileMoreAnchorEl } = this.state;
        const { classes } = this.props;
        const isMenuOpen = Boolean(anchorEl);
        const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

        const renderMenu = (
            <Menu
                anchorEl={anchorEl}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={isMenuOpen}
                onClose={this.handleMenuClose}
            >
                <MenuItem onClick={this.handleMenuClose}>Profile</MenuItem>
                <MenuItem onClick={this.handleMenuClose}>My account</MenuItem>
            </Menu>
        );

        const renderMobileMenu = (
            <Menu
                anchorEl={mobileMoreAnchorEl}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={isMobileMenuOpen}
                onClose={this.handleMobileMenuClose}
            >
                <MenuItem>
                    <IconButton color="inherit">
                        <Badge badgeContent={4} color="secondary">
                            <MailIcon />
                        </Badge>
                    </IconButton>
                    <p>Messages</p>
                </MenuItem>
                <MenuItem>
                    <IconButton color="inherit">
                        <Badge badgeContent={11} color="secondary">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                    <p>Notifications</p>
                </MenuItem>
                <MenuItem onClick={this.handleProfileMenuOpen}>
                    <IconButton color="inherit">
                        <AccountCircle />
                    </IconButton>
                    <p>Profile</p>
                </MenuItem>
            </Menu>
        );

        const renderMainMenu = (
            <React.Fragment>
                {['Home', 'About', 'Tasks'].map((text, index) => (
                    <ListItem button={true} key={text}>
                        <strong>
                            {text}
                        </strong>
                    </ListItem>
                ))}
            </React.Fragment>
        )

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
                        }}
                    >
                        <List>
                            <ListItem style={{justifyContent: 'left', paddingLeft: 0 }} >
                                <img src="/static/media/logo.ee7cd8ed.svg" className="App-logo" alt="logo" />
                                <strong>Welcome to React</strong>
                            </ListItem>
                            <Divider />
                            {renderMainMenu}
                        </List>
                    </Drawer>
                </Hidden>
                <AppBar position="static">
                    <Toolbar>
                        <Grid container={true} className="inherit-min-height" justify="center" alignItems="center">
                            <Grid item={true} xs={true}>
                                <Hidden mdDown={true}>
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
                                    {renderMainMenu}
                                </List>
                            </Grid>
                            <Grid container={true} item={true} xs={true} className={classes.flex} alignItems={"center"} justify={"flex-end"} >
                                <div className={classes.sectionDesktop}>
                                    <IconButton color="inherit">
                                        <Badge badgeContent={4} color="secondary">
                                            <MailIcon />
                                        </Badge>
                                    </IconButton>
                                    <IconButton color="inherit">
                                        <Badge badgeContent={17} color="secondary">
                                            <NotificationsIcon />
                                        </Badge>
                                    </IconButton>
                                    <IconButton
                                        aria-owns={isMenuOpen ? 'material-appbar' : undefined}
                                        aria-haspopup="true"
                                        onClick={this.handleProfileMenuOpen}
                                        color="inherit"
                                    >
                                        <AccountCircle />
                                    </IconButton>
                                </div>
                                <IconButton className={classes.sectionMobile} aria-haspopup="true" onClick={this.handleMobileMenuOpen} color="inherit">
                                    <MoreIcon />
                                </IconButton>
                            </Grid>
                        </Grid>

                    </Toolbar>
                </AppBar>
                {renderMenu}
                {renderMobileMenu}
            </div>
        );
    }

    private handleProfileMenuOpen = (event: any) => {
        this.setState({ anchorEl: event.currentTarget });
    };

    private handleMenuClose = () => {
        this.setState({ anchorEl: null });
        this.handleMobileMenuClose();
    };

    private handleMobileMenuOpen = (event: any) => {
        this.setState({ mobileMoreAnchorEl: event.currentTarget });
    };

    private handleMobileMenuClose = () => {
        this.setState({ mobileMoreAnchorEl: null });
    };

    private handleDrawerToggle = () => {
        this.setState({ mobileOpen: !this.state.mobileOpen });
    }
}

// tslint:disable:interface-name
interface MenuComponentProps {
    classes?: any,
    container?: any
}

interface MenuComponentState {
    anchorEl?: any,
    mobileMoreAnchorEl?: any,
    mobileOpen: boolean
}

export default withStyles(styles)(MenuComponent);