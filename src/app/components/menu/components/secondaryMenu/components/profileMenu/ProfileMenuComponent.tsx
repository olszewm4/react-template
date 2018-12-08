import { Menu, MenuItem } from '@material-ui/core';
import { PureComponent } from 'react';
import * as React from 'react';
import { ProfileMenuProps } from './typings';

export default class ProfileMenuComponent extends PureComponent<ProfileMenuProps, any> {
    public render() {
        const { anchorElement, isProfileMenuOpen } = this.props;
        const { closeProfileMenu } = this.props;

        return (
            <Menu
                anchorEl={anchorElement}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={isProfileMenuOpen}
                onClose={closeProfileMenu}>
                <MenuItem onClick={closeProfileMenu}>Profile</MenuItem>
                <MenuItem onClick={closeProfileMenu}>My account</MenuItem>
            </Menu>
        )
    }
}
