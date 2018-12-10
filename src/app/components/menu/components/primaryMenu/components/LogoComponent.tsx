import { PureComponent } from 'react';
import * as React from 'react';

export default class LogoComponent extends PureComponent {
    public render() {
        return (
            <React.Fragment>
                <img src="/static/media/logo.ee7cd8ed.svg" className="App-logo" alt="logo" />
                <strong>Welcome to React</strong>
            </React.Fragment>
        )
    }
}
