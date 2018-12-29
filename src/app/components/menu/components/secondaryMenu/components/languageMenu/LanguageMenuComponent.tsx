import { Menu, MenuItem } from '@material-ui/core';
import { PureComponent } from 'react';
import * as React from 'react';
import i18n from 'src/app/infrastructure/translation/i18n';
import { Languages } from 'src/app/infrastructure/translation/Languages';
import LanguageToFlagComponent from './components/LanguageToFlag/LanguageToFlagComponent';
import { LanguageMenuProps } from './typings';

export default class LanguageMenuComponent extends PureComponent<LanguageMenuProps, any> {


    public render() {
        // tslint:disable-next-line:no-console

        const currentLanguage = this.props.lng;
        const { anchorElement, isLanguageMenuOpen } = this.props;
        const { closeLanguageMenu, t } = this.props;
        const changeLanguage = this.changeLanguage;

        const availableLanguages: string[] = Object.keys(Languages).map<string>(k => Languages[k as any]);

        return (
            <Menu
                anchorEl={anchorElement}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                PaperProps={{
                    style: {
                        borderRadius: 0
                    },
                }}
                MenuListProps={{
                    style: {
                        // tslint:disable-next-line:object-literal-sort-keys
                        paddingTop: 0, paddingBottom: 0
                    }
                }}
                open={isLanguageMenuOpen}
                onClose={closeLanguageMenu}>
                {
                    availableLanguages.map((value: string, index: number) => (
                        <MenuItem
                            key={index}
                            onClick={changeLanguage.bind(this, value as Languages)}
                            selected={currentLanguage === value as Languages}>
                            <div style={{ marginTop: "0.5em", marginBottom: "0.7em", marginRight: "0.5em" }}>
                                <LanguageToFlagComponent language={value as Languages} />
                            </div>
                            {t(value)}
                        </MenuItem>
                    ))
                }
            </Menu>
        )
    }

    private changeLanguage = (lng: Languages): void => {
        i18n.changeLanguage(lng);
        this.props.closeLanguageMenu();
    };
}
