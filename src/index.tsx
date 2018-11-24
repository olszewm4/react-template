    import * as React from 'react';
    import * as ReactDOM from 'react-dom';
    import { BrowserRouter } from 'react-router-dom';
    import App from './App';
    import RouterComponent from './config/routing/RouterComponent';
    import './index.css';
    import registerServiceWorker from './registerServiceWorker';

    ReactDOM.render(
      <BrowserRouter>
        <React.Fragment>
          <App />
          <RouterComponent />
        </React.Fragment>
      </BrowserRouter>,
      document.getElementById('root') as HTMLElement
    );
    registerServiceWorker();
