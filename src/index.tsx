import * as React from 'react';
import * as ReactDOM from 'react-dom';
import AppComponent from './app/AppComponent';
import ErrorHandlerContainer from './app/components/error/ErrorHandlerContainer';
import './app/infrastructure/translation/i18n';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <ErrorHandlerContainer>
    <AppComponent />
  </ErrorHandlerContainer>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
