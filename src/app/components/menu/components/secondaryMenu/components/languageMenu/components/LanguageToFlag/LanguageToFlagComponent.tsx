import { PureComponent } from 'react';
import * as React from 'react';
import { Languages } from 'src/app/common/Languages';
import './content/css/flag-custom.css';
import './content/css/flag-icon.css';
import { LanguageToFlagComponentProps } from './typings';


export default class LanguageToFlagComponent extends PureComponent<LanguageToFlagComponentProps, any> {
    public render() {
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
