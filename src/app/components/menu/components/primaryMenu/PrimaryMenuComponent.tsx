import { ListItem } from '@material-ui/core';
import { PureComponent } from 'react';
import * as React from 'react';
import { PrimaryMenuProps } from './typings';

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
        return (
            <React.Fragment>
                {this.menuItems.map((value: MenuItem, index: number) => (
                    <ListItem button={true} key={index} onClick={this.onMenuItemClick.bind(this, value)}>
                        <strong>
                            {value.name}
                        </strong>
                    </ListItem>
                ))}
            </React.Fragment>
        )
    }

    private onMenuItemClick = (item: MenuItem): void => {
        this.props.history.push(item.path);
    }
}
