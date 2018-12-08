import { Badge, IconButton, Menu, MenuItem } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import MoreIcon from '@material-ui/icons/MoreVert';
import NotificationsIcon from '@material-ui/icons/Notifications';
import * as React from 'react';
import { PureComponent } from 'react';
import { SecondaryMenuProps, SecondaryMenuVersions } from './typings';

export default class SecondaryMenuComponent extends PureComponent<SecondaryMenuProps, any> {

    public render() {
        const { version } = this.props;
        if (version === SecondaryMenuVersions.Desktop) {
            return this.renderDesktop();
        }
        else {
            return this.renderMobile();
        }
    }

    private renderMobile() {
        const { anchorElement, isSecondaryMenuOpen } = this.props;
        const { openProfileMenu, closeSecondaryMenu } = this.props;

        return (
            <Menu
                anchorEl={anchorElement}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={isSecondaryMenuOpen}
                onClose={closeSecondaryMenu}>
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
                <MenuItem onClick={openProfileMenu}>
                    <IconButton color="inherit">
                        <AccountCircle />
                    </IconButton>
                    <p>Profile</p>
                </MenuItem>
            </Menu>
        );
    }

    private renderDesktop() {
        const { classes } = this.props; 
        const { isSecondaryMenuOpen } = this.props;
        const { openProfileMenu, openSecondaryMenu } = this.props;

        return (
            <React.Fragment>
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
                        aria-owns={isSecondaryMenuOpen ? 'material-appbar' : undefined}
                        aria-haspopup="true"
                        onClick={openProfileMenu}
                        color="inherit"
                    >
                        <AccountCircle />
                    </IconButton>
                </div>
                <IconButton className={classes.sectionMobile} aria-haspopup="true" onClick={openSecondaryMenu} color="inherit">
                    <MoreIcon />
                </IconButton>
            </React.Fragment>
        );
    }
}
