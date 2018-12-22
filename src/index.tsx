import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppComponent } from './app/AppComponent';
import './app/config/translation/i18n';
import ErrorBoundaryContainer from './app/infrastructure/errorsHandler/ErrorBoundaryContainer';
import { SnackbarProviderWrapper } from './providers/SnackbarProviderWrapper';
import { StoreProviderWrapper } from './providers/StoreProviderWrapper';
import { ThemeProviderWrapper } from './providers/ThemeProviderWrapper';
import registerServiceWorker from './registerServiceWorker';

// tslint:disable-next-line:no-console
console.log(process.env);


ReactDOM.render(
  <StoreProviderWrapper>
    <SnackbarProviderWrapper>
      <ThemeProviderWrapper>
        <ErrorBoundaryContainer>
        <AppComponent />
        </ErrorBoundaryContainer>
      </ThemeProviderWrapper>
    </SnackbarProviderWrapper>
  </StoreProviderWrapper>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
