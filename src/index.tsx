import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppComponent } from './app/AppComponent';
import './app/config/translation/i18n';
import { SnackbarProviderWrapper } from './providers/SnackbarProviderWrapper';
import { StoreProviderWrapper } from './providers/StoreProviderWrapper';
import { ThemeProviderWrapper } from './providers/ThemeProviderWrapper';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
  <StoreProviderWrapper>
    <SnackbarProviderWrapper>
      <ThemeProviderWrapper>
        <AppComponent />
      </ThemeProviderWrapper>
    </SnackbarProviderWrapper>
  </StoreProviderWrapper>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
