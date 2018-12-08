import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './app/App';
import { SnackbarProviderWrapper } from './providers/SnackbarProviderWrapper';
import { StoreProviderWrapper } from './providers/StoreProviderWrapper';
import { ThemeProviderWrapper } from './providers/ThemeProviderWrapper';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <StoreProviderWrapper>
    <SnackbarProviderWrapper>
      <ThemeProviderWrapper>
        <App />
      </ThemeProviderWrapper>
    </SnackbarProviderWrapper>
  </StoreProviderWrapper>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
