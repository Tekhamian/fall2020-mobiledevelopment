import React from 'react';
import logo from './logo.svg';
import './App.css';

// Relative path of the Example component
import Example from './components/Example';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         
          <div>
            {/* Self closing tag - renders the return from Example component */}
            <Example />
          </div>
          
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
