import * as React from 'react';
import * as ReactDOM from 'react-dom';
import AppComponent from './app/AppComponent';
import ErrorHandlerContainer from './app/components/error/ErrorHandlerContainer';
import './app/config/translation/i18n';
import registerServiceWorker from './registerServiceWorker';

// tslint:disable-next-line:no-console
console.log(process.env);


ReactDOM.render(
  <ErrorHandlerContainer>
    <AppComponent />
  </ErrorHandlerContainer>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
