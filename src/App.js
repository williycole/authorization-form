import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Login Form</h1>
        <h5>Mini React Project: Tech901-Fall 2020 Class</h5>
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: 'swordfish',
      authorized: false
    };
    this.authorize = this.authorize.bind(this);
  }

  authorize(e) {
    const password = e.target.querySelector(
      'input[type="password"]').value;
    const auth = password === this.state.password;
    this.setState({
      authorized: auth
    });
  }

  render() {
    const login = (
       <form action="#" onSubmit={this.authorize}>
        <input type="password" placeholder="Password" />
        <input type="submit" />
      </form>
    );
    const contactInfo = (
      <ul>
         <li>
           client@example.com
         </li>
         <li>
           555.555.5555
         </li>
      </ul>
    );
    return (
      <div id="authorization">
        <h1> { this.state.authorized ? 'Contact' : 'Enter the Password' }</h1>
         { this.state.authorized ? contactInfo : login }
      </div>
    );
  }
}

ReactDOM.render(
  <Contact />,
  document.getElementById('app')
);

export default App;
