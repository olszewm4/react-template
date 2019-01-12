import { PureComponent, ReactNode } from 'react';
import * as React from 'react';
import './content/css/flag-custom.css';
import './content/css/flag-icon.css';
import { LanguageToFlagComponentProps } from './typings';
import { Languages } from '../../../../../../../../infrastructure/translation/Languages';


export default class LanguageToFlagComponent extends PureComponent<LanguageToFlagComponentProps, any> {
    public render = () : ReactNode => {
        const { language } = this.props;
        switch (language) {
            case Languages.Polish:
                return (
                    <span className="flag-icon flag-custom flag-icon-pl"/>
                );
            case Languages.English:
                return (
                    <span className="flag-icon flag-custom flag-icon-gb"/>
                );
            default:
                throw new Error("Invalid language");
        }
    }
}
