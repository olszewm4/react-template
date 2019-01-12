import * as React from 'react';
import { ListItem } from '@material-ui/core';
import { PureComponent, ReactNode } from 'react';
import { PrimaryMenuItem, PrimaryMenuItemProps } from './typings';


export default class PrimaryMenuItemComponent extends PureComponent<PrimaryMenuItemProps> {
    public render() : ReactNode {
        return (
            <ListItem button={true} onClick={this.handleItemClick.bind(this, this.props.item)} style={{ textAlign: "unset", width: "unset" }} >
                <strong>
                    {this.props.t(this.props.item.name, { ns: "PrimaryMenuComponent", defaultValue: this.props.item.name })}
                </strong>
            </ListItem>
        )
    }

    private handleItemClick = (item: PrimaryMenuItem): void => {
        this.props.closePrimaryMenu();
        this.props.history.push(item.path);
    }
}
