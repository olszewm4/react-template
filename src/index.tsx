import * as React from 'react';
import * as ReactDOM from 'react-dom';
import AppComponent from './app/AppComponent';
import ErrorHandlerContainer from './app/components/error/ErrorHandlerContainer';
import registerServiceWorker from './registerServiceWorker';
import AppRoot from './app/infrastructure/compositionRoot/AppRoot';

AppRoot.getRoot().OnApplicationStart();

ReactDOM.render(
  <ErrorHandlerContainer>
    <AppComponent />
  </ErrorHandlerContainer>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
