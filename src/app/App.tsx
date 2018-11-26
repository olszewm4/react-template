import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import HeaderComponent from '../components/header/HeaderComponent';
import RouterComponent from '../config/routing/RouterComponent';
import './App.css';

class App extends React.Component<any, any> {

  public render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <HeaderComponent />
          <RouterComponent />
        </React.Fragment>
      </BrowserRouter>
    );
  }

}

export default App;