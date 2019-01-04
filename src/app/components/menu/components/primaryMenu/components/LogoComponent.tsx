import { PureComponent } from 'react';
import * as React from 'react';
import '../../../../../infrastructure/content/global.animations.css';
import * as localStyles from './content/logo.module.css';
import logo from './content/logo.svg';
import { LogoComponentProps } from './types';
import classNames from 'classnames';

export default class LogoComponent extends PureComponent<LogoComponentProps, any> {
    public render() {
        const { t } = this.props;
        return (
            <React.Fragment>
                <img src={logo} className={classNames("spin-animation", localStyles.appLogo)} alt="logo" />
                <strong>{t('Welcome to React')}</strong>
            </React.Fragment>
        )
    }
}
