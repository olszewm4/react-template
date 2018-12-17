import { PureComponent } from 'react';
import * as React from 'react';
import './Logo.css';
import logo from './logo.svg';
import { LogoComponentProps } from './types';

export default class LogoComponent extends PureComponent<LogoComponentProps, any> {
    public render() {
        const { t } = this.props;
        return (
            <React.Fragment>
                <img src={logo} className="App-logo" alt="logo" />
                <strong>{t('Welcome to React')}</strong>
            </React.Fragment>
        )
    }
}
