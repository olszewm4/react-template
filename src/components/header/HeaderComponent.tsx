import * as React from 'react';
import './Header.css';

import { Link, NavLink } from 'react-router-dom';
import { withRouter } from 'react-router-dom'
import logo from './logo.svg';

class HeaderComponent extends React.Component<any, IState> {

  /**
   *
   */
  constructor(props: any, context?: any) {
    super(props, context);
    this.state = {
      id: 0,
      name: ''
    };
  }

  public render() {
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.tsx</code> and save to reload.
          </p>
          <p>
            <Link to="/Home" >Home by Link</Link>
            <Link to="/About/3/test">About by Link</Link>
            <NavLink to="/About/4/test" activeStyle={{ color: 'red' }}>About by Navlink</NavLink>
          </p>
          <div>
            <span>Simple form to redirect</span>
            <input type="number" value={this.state.id} onChange={this.onIdChange} />
            <input type="text" value={this.state.name} onChange={this.onNameChange} />
            <button onClick={this.onRedirectToAbout}>Redirect to About</button>
          </div>
        </div>
    );
  }

  private onRedirectToAbout = () => {
    this.props.history.push(`/About/${this.state.id}${this.state.name !== '' ? `/${this.state.name}` : ''}`)
  }

  private onIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ id: Number.parseInt(e.currentTarget.value, undefined) });
  }

  private onNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ name: e.currentTarget.value });
  }
}

interface IState {
  id: number,
  name: string,
}

export default withRouter(HeaderComponent);