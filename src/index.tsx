import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import AboutPage from './components/about/about';
import HomePage from './components/home/home';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <div id="mainContainer">
      <App />
      {["/", "/Home"].map((path, index) => 
        // tslint:disable-next-line:jsx-boolean-value
        <Route exact path={path} component={HomePage} key={index} />
      )}
      <Route path="/About/:id/:name?" component={AboutPage} />
    </div>
  </BrowserRouter>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
